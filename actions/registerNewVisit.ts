'use server'

import {db} from "@/db";


interface RegisterNewUserProps {
    phone_number: string,
    customer_name: string,
    address: string,
    region: string,
    visit_date: Date
}

export async function registerNewVisit(values: Promise<RegisterNewUserProps>) {

    // @ts-ignore
    const {phone_number, customer_name, address, region, visit_date, session_id} = values


    const costumerByPhone = await db.user.findFirst({
        where: {
            phone_number: phone_number
        }
    })

    // @ts-ignore
    const costumerId = costumerByPhone.id
    // @ts-ignore
    const costumerSessionId = costumerByPhone.session_id


    const registerVisit = await db.visit.create({
        data: {
            userId: costumerId,
            session_id: costumerSessionId,
            // @ts-ignore
            visit_date: visit_date
        }
    })
}