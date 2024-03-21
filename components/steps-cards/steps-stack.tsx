import StepsCard from "@/components/steps-cards/steps-card";
import MeasureAppointmentLink from "@/components/measure-appointment-link";
import StepsCardMeasureLink from "@/components/steps-cards/steps-card";
import {DoubleArrowRightIcon} from "@radix-ui/react-icons";
import pictureStep from '@/resources/pictures/steps/home-measure.avif'

export default function StepsStack () {

    const link = <MeasureAppointmentLink/>

    return (
        <div className={'pt-6'}>
            <StepsCardMeasureLink pictureStep={pictureStep} pictureAlt={'pirmas žingsnis virtuves matavymas'} stepNumber={'1'} cardTitle={'Virtuvės matavimas'} cardContent={'Norėdami pagaminti virtuvę, reikalinga tikslių matmenų'} cardLink={link}/>
        </div>
    );
};
