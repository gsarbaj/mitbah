import CardTrigger from "@/components/triger-cards/card-trigger";
import appIcon from '@/app/apple-icon.svg'
import kitchenIcon from '@/data/icons/kitchen-icon.svg'
import calendarIcon from '@/data/icons/calendar-icon.svg'
import colorIcon from '@/data/icons/colors-icon.svg'
import mesureIcon from '@/data/icons/mesure-icon.svg'
import leafIcon from '@/data/icons/leaf-outline.svg'
import Image from "next/image";
import {cn} from "@/lib/utils";

const cssClassName = 'mx-auto'

export default function CardStack ({className}: any) {

    return (
        <>
            <div className={cn('flex flex-row justify-between mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)}>
                <CardTrigger imgCard={<Image className={cssClassName} src={kitchenIcon} alt={'virtuves baldai'}/>} mainText={'iki 1790 EUR'} extraText={'Vidutinė virtuvės kaina'}/>
                <CardTrigger imgCard={<Image className={cssClassName} src={calendarIcon} alt={'virtuves baldai'}/>} mainText={'nuo 14 dienų'} extraText={'Gamybos laikas'}/>
                <CardTrigger imgCard={<Image className={cssClassName} src={mesureIcon} alt={'virtuves baldai'}/>} mainText={'Bet kokia forma'} extraText={'1 mm tikslumu'}/>
                <CardTrigger imgCard={<Image className={cssClassName} src={colorIcon} alt={'virtuves baldai'}/>} mainText={'300+ dekorų'} extraText={'ir skirtingų tekstūrų'}/>
                <CardTrigger imgCard={<Image className={cssClassName} src={leafIcon} alt={'virtuves baldai'}/>} mainText={'Ekologiškos medžiagos'} extraText={'sertifikuotos medžiagos'}/>

            </div>
        </>
    );
};

// cn('flex flex-row justify-between mx-auto w-full max-w-screen-xl px-2.5 md:px-20 pt-8', className)