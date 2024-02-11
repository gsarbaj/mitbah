import {Button} from "@/components/ui/button";
import {CalendarIcon, EnvelopeOpenIcon} from "@radix-ui/react-icons";
import Link from "next/link";
import {ReactNode} from "react";
import {cn} from "@/lib/utils";

export default function MeasureAppointmentButton ({className, iconClassName, additionalIcon}: {
    className?: string
    iconClassName?: string
    additionalIcon?: ReactNode
}) {

    return (
        <>
            <Link href={'/'}>
                <Button className={cn(className)}>
                    <CalendarIcon className={cn("mr-2 h-4 w-4", iconClassName)}/>
                    Iškviesti matavimo specialistą&nbsp;&nbsp;
                    {additionalIcon}
                </Button>
            </Link>

        </>
    );
};
