"use server"
import {db} from '@/db'
import {cookies} from "next/headers";


export async function registerPageSession() {

    if (!cookies().has("isFirstTime")) {
        const sessionID = crypto.randomUUID()

        cookies().set("isFirstTime", "false")


        const session = await db.session.create({
            data: {
                session_id: sessionID
            }
        })
    }
}