import CardTrigger from "@/components/triger-cards/card-trigger";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import appIcon from '@/app/apple-icon.svg'
import Image from "next/image";
import {cn} from "@/lib/utils";

const cssClassName = 'mx-auto'

export default function CardStack ({className}: any) {

    return (
        <>
            <div className={cn('flex flex-row justify-between mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)}>
                <CardTrigger imgCard={<Image className={cssClassName} src={appIcon} alt={'virtuves baldai'}/>} mainText={'nuo 1790 EUR'} extraText={'Text text text'}/>
                <CardTrigger imgCard={<Image className={cssClassName} src={appIcon} alt={'virtuves baldai'}/>} mainText={'nuo 1790 EUR'} extraText={'Text'}/>
                <CardTrigger imgCard={<Image className={cssClassName} src={appIcon} alt={'virtuves baldai'}/>} mainText={'nuo 1790 EUR'} extraText={'Text'}/>
                <CardTrigger imgCard={<Image className={cssClassName} src={appIcon} alt={'virtuves baldai'}/>} mainText={'nuo 1790 EUR'} extraText={'Text'}/>
                <CardTrigger imgCard={<Image className={cssClassName} src={appIcon} alt={'virtuves baldai'}/>} mainText={'nuo 1790 EUR'} extraText={'Text'}/>

            </div>
        </>
    );
};

// cn('flex flex-row justify-between mx-auto w-full max-w-screen-xl px-2.5 md:px-20 pt-8', className)