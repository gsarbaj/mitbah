import Hero from "@/components/hero";
import TestForm from "@/components/forms/test-form";
import RegisterFirstVisitCookieSet from "@/components/RegisterFirstVisitCookieSet";
import {hasCookie} from 'cookies-next';
import StepsStack from "@/components/steps-cards/steps-stack";


export default async function Home() {


    const isFirstTime: boolean = !hasCookie("isFirstTime")


    return (
        <main>
            {isFirstTime ? <RegisterFirstVisitCookieSet/> : null}
            <Hero/>
            <StepsStack/>
        </main>
    );
}