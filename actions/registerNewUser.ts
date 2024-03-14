'use server'

import {cookies} from "next/headers";
import {db} from "@/db";
import * as actions from '@/actions'

interface RegisterNewUserProps {
    phone_number: string,
    customer_name: string,
    address: string,
    region: string,
    visit_date: string
}

export async function registerNewUser(values: Promise<RegisterNewUserProps>) {


    // @ts-ignore
    const {phone_number, customer_name, address, region, visit_date, session_id} = values

    let firstName;
    let lastName;

    if (customer_name) {
        firstName = customer_name.split(' ')[0]
        lastName = customer_name.split(' ')[1]
    }

    if (!cookies().has("session_id")) {

        const sessionID = await actions.randomIdGeneration()

        await actions.registerCookiesAndSession(sessionID)


        // @ts-ignore
        const newUserRegister = await db.user.upsert({
            where: {
                phone_number: phone_number,
            },
            update: {
                first_name: firstName,
                last_name: lastName,
                email: null,
                user_address: address,
                region: region,

            },
            // @ts-ignore
            create: {
                phone_number: phone_number,
                first_name: firstName,
                last_name: lastName,
                email: null,
                user_address: address,
                region: region,
                session_id: session_id
            }
        })

    } else {


        // @ts-ignore
        const newUserRegister = await db.user.upsert({
            where: {
                phone_number: phone_number,
            },
            update: {
                first_name: firstName,
                last_name: lastName,
                email: null,
                user_address: address,
                region: region,

            },
            // @ts-ignore
            create: {
                phone_number: phone_number,
                first_name: firstName,
                last_name: lastName,
                email: null,
                user_address: address,
                region: region,
                session_id: session_id
            }
        })
    }
}