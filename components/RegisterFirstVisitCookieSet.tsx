"use client"
import {useEffect} from "react";
import * as actions from '@/actions'

export default function CookieSet() {
    useEffect(() => {
        actions.registerPageSession().finally()
    })
    return null
};
