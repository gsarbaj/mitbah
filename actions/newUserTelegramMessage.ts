'use server'
import * as data from '@/data'
import {db} from '@/db'

import axios from "axios";


export async function newUserTelegramMessage(values: { phone_number: string; customer_name?: string | undefined; address?: string | undefined; region?: string | undefined; visit_date?: Date | undefined; visit_time?: Date | undefined; session_id?: string | undefined; }) {

    let {phone_number, customer_name, address, region, visit_date, session_id} = values

    const ifUserExist = await db.user.findFirst({
        where: {
            phone_number: phone_number
        }
    })

    if (ifUserExist) {
        
        return
    }

    if (!customer_name) {
        customer_name = ''
    }

    let text_message = `*Naujas klientas: * \n\n _${customer_name}_ \n ${phone_number} \n`

    await axios.post(`${process.env["TELEGRAM_BOT_API"]}/sendMessage`,{
        chat_id: data.telegramData.MANAGER_CHAT_ID,
        text: text_message,
        parse_mode: "Markdown"
    })

}