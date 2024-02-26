"use client"
import {useEffect} from "react";
import * as actions from '@/actions'

export default function RegisterFirstVisitCookieSet() {
    useEffect(() => {
        actions.registerPageSession().finally()
    })
    return null
};
