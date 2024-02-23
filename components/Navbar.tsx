'use client'

import Logo from "@/components/Logo";
import MeasureAppointmentButton from "@/components/measure-appointment-button";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {useMediaQuery} from "react-responsive";
import MobileNavbar from "@/components/MobileNavbar";
import {JSX} from "react";

export default function Navbar(): JSX.Element {

    const phone: string = '+37067707257'

    const isSmallDevice = useMediaQuery({query: '(max-width: 768px)'});

    return (
        <nav
            className={'sticky h-14 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all'}>
            <div className={'justify-between mr-2'}>
                <div className={'flex h-14 items-center justify-between border-b border-zinc-200'}>

                    {isSmallDevice ? null : <Logo/>}

                    {isSmallDevice ? <div className={'justify-center'}>

                            <MeasureAppointmentButton
                                className={'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 mr-6'}/>
                            <a href={`tel:${phone}`}>{phone}</a> <MobileNavbar/></div>
                        : <div className={'hidden items-center space-x-4 sm:flex'}>
                            <>
                                <Link href={'/'}
                                      className={buttonVariants({variant: 'ghost', size: 'lg'})}>Matavimai</Link>
                                <Link href={'/'}
                                      className={buttonVariants({variant: 'ghost', size: 'lg'})}>Materialai</Link>
                                <Link href={'/'}
                                      className={buttonVariants({variant: 'ghost', size: 'lg'})}>Apmokejimas</Link>
                                <Link href={'/'}
                                      className={buttonVariants({variant: 'ghost', size: 'lg'})}>Kontaktai</Link>
                                <a href={`tel:${phone}`} className={'text-xl'}>{phone}</a>
                            </>
                            <MeasureAppointmentButton/>
                        </div>}
                </div>
            </div>
        </nav>
    );
};
