import MeasureAppointmentButton from "@/components/measure-appointment-button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {ChevronRightIcon, DoubleArrowRightIcon} from "@radix-ui/react-icons";
import HeroImg from "@/resources/pictures/hero.png";
import Image from "next/image";
import CardStack from "@/components/triger-cards/card-stack";

export default function Hero() {
    return (
        <div className={'relative'}>
            <Image
                src={HeroImg}
                alt={"Virtuvės baldai"}
                placeholder={"blur"}
                className={"-z-10"}
                loading={'eager'}
            />
            <div className={'top-0 left-0 absolute w-full h-full bg-white/50'}></div>
            <div
                className={
                    "absolute inset-y-1/3 left-0 text-center w-full"
                }
            >
                <div>
                    <h2
                        className={"text-muted-foreground sm:text-xl md:text-xl lg:text-xl text-gray-900"}
                    >
                        Aukščiausios kokybės virtuvės baldų gamyba
                    </h2>
                </div>

                <div className={'flex'}>
                    <h1
                        className={

                            'font-bold w-5/6 mx-auto text-2xl 2xl:text-6xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl'
                        }
                    >
                        <span className={"text-primary"}>Virtuvės baldai. </span>Prabanga
                        prieinama kiekvienam
                    </h1>
                </div>


                <br/>
                <MeasureAppointmentButton
                    className={"lg:py-6 lg:text-xl shadow"}
                    iconClassName={"lg:h-6 lg:w-6"}
                    additionalIcon={<DoubleArrowRightIcon className="lg:h-6 lg:w-6"/>}
                />

                <CardStack className={'pt-16 scroll-pt-16'}/>
            </div>
        </div>
    );
}