'use server'

import {redirect} from 'next/navigation'
import {db} from '@/db'
import {cookies} from "next/headers";
import * as actions from '@/actions'


export async function registerMeasureAppointmentClick() {


    if (!cookies().has("session_id")) {

        const sessionID = crypto.randomUUID()
        cookies().set("session_id", sessionID.toString(), {expires: Date.now() + 9000000000})

        const sessionRegister = await db.session.create({
            data: {
                session_id: sessionID as string
            }
        })


        const clickRegister = await db.measureAppointmentClick.create({
            data: {
                session_id: sessionID as string
            }
        })


    } else {

        const session_id = cookies().get("session_id")

        const sessionExist = await db.session.findFirst({
            where: {
                session_id: session_id?.value
            }
        })

        if (!sessionExist) {
            console.log(sessionExist);
            const clickRegister = await db.measureAppointmentClick.create({
                data: {
                    session_id: session_id?.value as string
                }
            })
        }

    }


    redirect('/matavimai/iskviesti')

}