import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";


export default function StepsCardMeasureLink({stepNumber, cardTitle, cardContent, cardLink, pictureStep, pictureAlt}: {stepNumber: string, cardTitle: string, cardContent: string, cardLink: any, pictureStep: any, pictureAlt: string}) {

    return (
        <div className={'w-full px-8'}>
            <Card className={'w-[350px]'}>
                <Image src={pictureStep} alt={pictureAlt} className={'w-full h-full object-cover'} placeholder="blur"/>
                <CardHeader>
                    <CardDescription className={'text-primary font-bold'}> {stepNumber} žingsnis</CardDescription>
                    <CardTitle className={'text-lg'}>{cardTitle}</CardTitle>
                </CardHeader>
                <CardContent className={'font-light'}>
                    {cardContent}
                </CardContent>


                <CardFooter className={'justify-center'}>
                    {cardLink}
                </CardFooter>

            </Card>
        </div>
    );
};
