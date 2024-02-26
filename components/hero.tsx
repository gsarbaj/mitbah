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
            />
            <div className={'top-0 left-0 absolute w-full h-full bg-white/50'}></div>
            <div
                className={
                    "absolute inset-y-1/3 left-0 text-center w-full"
                }
                //absolute h-full top-0 left-0 mb-12 mt-28 flex flex-col items-center justify-center text-center sm:mt-40 mx-auto md:px-20
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
                            "font-bold sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl w-5/6 mx-auto"
                        }
                    >
                        <span className={"text-primary"}>Virtuvės baldai. </span>Prabanga
                        prieinama kiekvienam
                    </h1>
                </div>


                <br/>
                <MeasureAppointmentButton
                    className={"lg:py-6 lg:text-xl"}
                    iconClassName={"lg:h-6 lg:w-6"}
                    additionalIcon={<DoubleArrowRightIcon className="lg:h-6 lg:w-6"/>}
                />

                <CardStack className={'pt-16 scroll-pt-16'}/>
            </div>
        </div>
    );
}