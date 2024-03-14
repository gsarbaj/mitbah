'use server'
import * as data from '@/data'
import {db} from '@/db'

import axios from "axios";
import {format} from "date-fns";
import {lt} from "date-fns/locale";


export async function newVisitTelegramMessage(values: {
    phone_number: string;
    customer_name?: string | undefined;
    address?: string | undefined;
    region?: string | undefined;
    visit_date?: Date | undefined;
    visit_time?: Date | undefined;
    session_id?: string | undefined;
}) {

    let {phone_number, customer_name, address, region, visit_date, session_id} = values


    const ifCustomerExists = await db.user.findFirst({
        where: {
            phone_number: phone_number
        },
        select: {
            first_name: true,
            last_name: true
        }
    })

    if (!customer_name) {
        // @ts-ignore
        if (ifCustomerExists.first_name) {
            // @ts-ignore
            customer_name = ifCustomerExists.first_name + ' ' + ifCustomerExists.last_name
        } else {
            customer_name = ''
        }
    }


    if (!address) {
        address = ''
    }

    if (!region) {
        region = ''
    }
    if (!visit_date) {
        visit_date = new Date()
    }


    // @ts-ignore
    const visitDate = format(visit_date, "PPPP", {locale: lt})


    let text_message = `*${customer_name}* užsakė virtuves matavimą \n ${phone_number}\n\n ${address}, ${region} \n ${visitDate} \n`

    await axios.post(`${process.env["TELEGRAM_BOT_API"]}/sendMessage`, {
        chat_id: data.telegramData.MANAGER_CHAT_ID,
        text: text_message,
        parse_mode: "Markdown"
    })
}