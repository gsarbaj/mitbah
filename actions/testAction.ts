'use server'

import {db} from "@/db";
import axios from "axios";

const bot = {
    CHAT_ID: '230195690'
}

export async function createTest(formData: FormData) {
    const emailAddress = formData.get('emailAddress') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const first_name = formData.get('first_name') as string;
    const last_name = formData.get('last_name') as string;

    const user = await db.user.create({
        data: {
            email: emailAddress,
            phone_number: phoneNumber,
            first_name: first_name,
            last_name: last_name,
        }
    })

    const session = await db.session.create({
        data: {
            session_id: 'as kjshdkjhdfk kjhsd'
        }
    })

    //console.log(user);
    let text_message = `Naujas klientas: 
${first_name} ${last_name} 
${phoneNumber}, ${emailAddress}`


    await axios.post(`${process.env["TELEGRAM_BOT_API"]}/sendMessage`,{
        chat_id: bot.CHAT_ID,
        text: text_message
    })

}