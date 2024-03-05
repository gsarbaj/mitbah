'use client'

import Logo from "@/components/Logo";
import MeasureAppointmentButton from "@/components/measure-appointment-button";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {useMediaQuery} from "react-responsive";
import MobileNavbar from "@/components/MobileNavbar";
import {JSX} from "react";
import NavMenu from "@/components/NavMenu";



export default function Navbar(): JSX.Element {

    const phone: string = '+37067707257'

    return (
        <header
            className={'sticky h-14 top-0 z-30 w-full border-b border-gray-200 bg-white backdrop-blur-lg transition-all'}>
            <div className={'mr-2'}>
                <div className={'flex h-14 items-center border-b border-zinc-200'}>
                    <Logo/>
                      <div className={'items-center flex'}>
                                <NavMenu/>
                                <div><a href={`tel:${phone}`} className={'text-xl'}>{phone}</a></div>
                          <div className={'ml-2 hidden 2xl:block xl:block lg:block'}>
                            <MeasureAppointmentButton />
                          </div>
                          <MobileNavbar/>
                        </div>
                </div>
            </div>
        </header>
    );
};
