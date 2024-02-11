import MeasureAppointmentButton from "@/components/measure-appointment-button";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ChevronRightIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons"

export default function Hero () {

    return (
        <>
            <MaxWidthWrapper className={'mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center'}>

                <div>
                    <h2 className={'lg:text-xl md:text-xl sm:text-xl text-muted-foreground'}>Aukščiausios kokybės virtuvės baldų gamyba</h2>
                </div>

                <h1 className={'max-w-4xl font-bold xl:text-6xl lg:text-5xl md:text-4xl sm:text-4xl'}>
                    <span className={'text-primary'}>Virtuvės baldai. </span>Prabanga prieinama kiekvienam
                </h1>
                <br/>
                <MeasureAppointmentButton  className={'lg:text-xl lg:py-6'} iconClassName={'lg:h-6 lg:w-6'} additionalIcon={<DoubleArrowRightIcon className="lg:h-6 lg:w-6" />}/>

            </MaxWidthWrapper>
        </>
    );
};
