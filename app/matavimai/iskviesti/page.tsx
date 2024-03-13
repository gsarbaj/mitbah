import RegisterFirstVisitCookieSet from "@/components/RegisterFirstVisitCookieSet";
import RegisterMeasureAppointmentCookieSet from "@/components/RegisterMeasureAppointmentCookieSet";
import { hasCookie } from 'cookies-next';
import Image from "next/image";
import measure from '@/resources/pictures/mesure.jpg'
import MeasureAppointmentForm from "@/components/forms/measure-appointment-form";
import * as actions from "@/actions"




export default function IskviestiMatavimui() {


    const isFirstTime: boolean = !hasCookie("isFirstTime")
    const sessionId: boolean =!hasCookie('session_id')



    return (

        <main>
            {isFirstTime ? <RegisterFirstVisitCookieSet/> : null}
            {sessionId ?<> <RegisterFirstVisitCookieSet/> <RegisterMeasureAppointmentCookieSet/> </>: null}
            <div className={'flex'}>
                <h1
                    className={

                        'font-bold w-5/6 mx-auto text-2xl 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl'
                    }
                >
                    <span className={"text-primary"}>Virtuvės patalpos matavimas. </span>Iškviesti specialista
                </h1>
            </div>

                <Image src={measure} alt={'Virtuvės patalpų matavimas'} placeholder={"blur"} className={"-z-10"}/>

            {/*<div className={'top-0 left-0 absolute w-full h-full bg-white/50'}></div>*/}
            <MeasureAppointmentForm/>
        </main>
    );
};
