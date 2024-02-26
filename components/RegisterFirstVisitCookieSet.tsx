"use client"
import {useEffect} from "react";
import * as actions from '@/actions'

export default function RegisterFirstVisitCookieSet() {
    console.log("APP")
    useEffect(() => {
        actions.registerPageSession().finally()
    })
    return null
};
