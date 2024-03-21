import {Button} from "@/components/ui/button";
import {CalendarIcon} from "@radix-ui/react-icons";
import Link from "next/link";
import {ReactNode} from "react";
import {cn} from "@/lib/utils";
import * as actions from '@/actions'
import { buttonVariants } from "@/components/ui/button"


export default function MeasureAppointmentLink({className}: {
    className?: string
    iconClassName?: string
    additionalIcon?: ReactNode
}) {

    return (
        <>
            <Link className={`${cn(buttonVariants({ variant: "outline" }), className)}`} href={'/matavimai/iskviesti'} prefetch scroll>
                Iškviesti matavimo specialistą
            </Link>
        </>
    );
};