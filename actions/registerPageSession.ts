"use server"
import {db} from '@/db'
import {cookies} from "next/headers";


export async function registerPageSession() {


    if (!cookies().has("isFirstTime")) {
        console.log("hi")

        const sessionID = crypto.randomUUID()

        cookies().set("isFirstTime", "false", {expires: Date.now() + 9000000000})
        cookies().set("session_id", sessionID.toString(), {expires: Date.now() +9000000000})


        const session = await db.session.create({
            data: {
                session_id: sessionID
            }
        })
    }
}