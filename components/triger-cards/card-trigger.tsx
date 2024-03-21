import {Card, CardContent, CardFooter,} from "@/components/ui/card";


export default function CardTrigger({imgCard, mainText, extraText}: any) {

    return (
        <>
            <div className={'flex justify-center text-center max-w-40'}>
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
