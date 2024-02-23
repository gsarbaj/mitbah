// import {NextRequest, NextResponse} from "next/server";
// import * as actions from '@/actions'
// import {db} from '@/db'
//
export function middleware() {

    // const response = NextResponse.next()
    //
    // const isFirstTime: boolean = !req.cookies.has("isFirstTime")
    //
    //
    // if (isFirstTime) {
    //
    //     const sessionID: string = crypto.randomUUID()
    //     response.cookies.set("session_id", sessionID)
    //
    //     // actions.registerPageSession(sessionID).finally()
    //
    //
    //     // db.session.create({
    //     //     data: {
    //     //         session_id: sessionID
    //     //     }
    //     // })
    //
    //     response.cookies.set("isFirstTime", "false")
    // }
    //
    //
    //
    // return response;
}

export const config = {
    matcher: '/'
}