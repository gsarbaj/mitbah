"use client"
import {useEffect} from "react";
import * as actions from '@/actions'

export default function RegisterMeasureAppointmentCookieSet() {
    useEffect(() => {
        actions.registerMeasureAppointmentClickNoRedirection().finally()
    })
    return null
};
