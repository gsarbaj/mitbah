import {Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,} from "@/components/ui/card";


export default function CardTrigger ({imgCard, mainText, extraText}: any) {

    return (
        <>
            <div className={'flex justify-center text-center'}>
                <Card className={''}>
                    <CardContent className={'justify-center'}>
                        <br/>
                        <div className={'justify-center'}>
                        {imgCard}
                        </div>
                        <br/>
                        <p className={'font-bold'}>{mainText}</p>
                    </CardContent>
                    <CardFooter className={'justify-center'}>
                        <p>{extraText}</p>
                    </CardFooter>
                </Card>

            </div>
        </>
    );
};
