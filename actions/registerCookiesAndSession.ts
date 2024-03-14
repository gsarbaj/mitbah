'use server'

import {cookies} from "next/headers";
import {db} from "@/db";

export async function registerCookiesAndSession(sessionID: string) {

    if (!cookies().has("session_id")) {
        cookies().set("session_id", sessionID.toString(), {
            expires: Date.now() + 9000000000,
        });

        const sessionRegister = await db.session.create({
            data: {
                session_id: sessionID as string,
            },
        });

        const clickRegister = await db.measureAppointmentClick.create({
            data: {
                session_id: sessionID as string,
            },
        });
    }
}