'use server'

import {redirect} from 'next/navigation'
import {db} from '@/db'
import axios from "axios";
import {cookies} from "next/headers";
import * as actions from '@/actions'


export async function registerMeasureAppointmentClick() {

    if (cookies().has("isFirstTime")) {

        if(!cookies().has("session_id")){
            cookies().delete("isFirstTime")
           await actions.registerPageSession().finally()
        }

        if (!cookies().has("FirstClick")) {
            const session_id = cookies().get("session_id")

            const clickRegister = await db.measureAppointmentClick.create({
                data: {
                    session_id: session_id?.value as string
                }
            })

            cookies().set("FirstClick", "false", {expires: Date.now() + 9000000000})
        }
    }

    redirect('/matavimai/iskviesti')

}