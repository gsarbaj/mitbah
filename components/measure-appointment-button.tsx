import {Button} from "@/components/ui/button";
import {CalendarIcon} from "@radix-ui/react-icons";
import Link from "next/link";
import {ReactNode} from "react";
import {cn} from "@/lib/utils";
import * as actions from '@/actions'
import { buttonVariants } from "@/components/ui/button"


export default function MeasureAppointmentButton({className, iconClassName, additionalIcon}: {
    className?: string
    iconClassName?: string
    additionalIcon?: ReactNode
}) {

    return (
        <>
            {/*<form action={actions.registerMeasureAppointmentClick}>*/}
            {/*    <Button className={`${cn(className)}`} type={'submit'}>*/}
            {/*        <CalendarIcon className={cn("mr-2 h-4 w-4", iconClassName)}/>*/}
            {/*        Iškviesti matavimo specialist<Link href={'/matavimai/iskviesti'} prefetch={true}>ą</Link>&nbsp;&nbsp;*/}
            {/*        {additionalIcon}*/}
            {/*    </Button>*/}
            {/*</form>*/}

            <Link className={`${cn(buttonVariants(), className)}`} href={'/matavimai/iskviesti'} prefetch scroll>
                <CalendarIcon className={cn("mr-2 h-4 w-4", iconClassName)}/> Iškviesti matavimo specialistą&nbsp;&nbsp; {additionalIcon}
            </Link>
        </>
    );
};