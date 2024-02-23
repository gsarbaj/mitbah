import {Button} from "@/components/ui/button";

import Link from "next/link";
import Hero from "@/components/hero";
import MeasureAppointmentButton from "@/components/measure-appointment-button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CardStack from "@/components/triger-cards/card-stack";
import TestForm from "@/components/forms/test-form";
import * as actions from '@/actions'
import {cookies} from 'next/headers'
import CookieSet from "@/components/CookieSet";


export default async function Home() {


    const isFirstTime: boolean = !cookies().has("isFirstTime")


    return (
        <main>
            {isFirstTime ? <CookieSet/> : null}
            <Hero/>
            <TestForm/>
        </main>
    );
}