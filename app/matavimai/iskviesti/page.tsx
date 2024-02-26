'use client'
import RegisterFirstVisitCookieSet from "@/components/RegisterFirstVisitCookieSet";
import RegisterMeasureAppointmentCookieSet from "@/components/RegisterMeasureAppointmentCookieSet";
import { hasCookie } from 'cookies-next';
import {useState} from "react";



export default function IskviestiMatavimui() {


    const isFirstTime: boolean = !hasCookie("isFirstTime")
    const isFirstClick: boolean = !hasCookie("FirstClick")
    const sessionId: boolean =!hasCookie('session_id')



    return (
        <>
            {isFirstTime ? <RegisterFirstVisitCookieSet/> : null}
            {sessionId ? <RegisterFirstVisitCookieSet/> : null}
            {isFirstClick? <RegisterMeasureAppointmentCookieSet/> : null}
            <h1>Iskviesti matavimu kjhgh kjhkjh kjhkjh kjhkjh kjhkjh kjhkjhlhfhdfjtf hjklhlkjh</h1>
            <h1>Iskviesti matavimu</h1>
            <h1>Iskviesti matavimu</h1>
            <h1>Iskviesti matavimu</h1>
            <h1>Iskviesti matavimu</h1>
            <h1>Iskviesti matavimu</h1>
            <h1>Iskviesti matavimu</h1>
            <h1>Iskviesti matavimu</h1>
            <h1>Iskviesti matavimu</h1>
            <h1>Iskviesti matavimu</h1>
        </>
    );
};
