'use client'

import {z} from "zod"
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { cn } from "@/lib/utils"


import {Button} from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {Input} from "@/components/ui/input"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { PopoverClose } from "@radix-ui/react-popover"
import { toast } from "@/components/ui/use-toast"
import {useState} from "react";
import {lt} from "date-fns/locale";

const formSchema = z.object({
    phone_number: z.string().min(5, {
        message: 'kjh'
    }).max(16, {
        message: ''
    }),
    customer_name: z.string().optional(),
    address: z.string().optional(),
    city: z.string().optional(),
    visit_date: z.date().optional(),
    visit_time: z.date().optional()
})

const description = 'This is a description.'


export default function MeasureAppointmentForm() {

    const [firstFormDivClassName, setFirstFormDivClassName] = useState("")
    const [secondFormDivClassName, setSecondFormDivClassName] = useState("hidden")
    const [thirdFormDivClassName, setThirdFormDivClassName] = useState("hidden")

    const [firstStepClassName, setFirstStepClassName] = useState('h-10 w-10 bg-primary rounded-full opacity-50')
    const [secondStepClassName, setSecondStepClassName] = useState('h-10 w-10 bg-slate-300 rounded-full')
    const [thirdStepClassName, setThirdStepClassName] = useState('h-10 w-10 bg-slate-300 rounded-full')

    const [firstSign, setFirsSign] = useState("1")
    const [secondSign, setSecondSign] = useState("2")
    const [thirdSign, setThirdSign] = useState("3")

    const [firstWord, setFirstWord] = useState('')
    const [secondWord, setSecondWord] = useState('text-slate-300')
    const [thirdWord, setThirdWord] = useState('text-slate-300')

    const [firstLine, setFirstLine] = useState("h-5 w-px bg-primary mt-1 opacity-50")
    const [secondLine, setSecondLine] = useState("h-5 w-px bg-slate-300 mt-1")

    const [finalBlock, setFinalBlock] = useState('hidden')

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phone_number: "+370"
        }
    })


    function firstFormSubmit(values: z.infer<typeof formSchema>) {

        setFirstFormDivClassName('hidden')
        setSecondFormDivClassName('')
        setFirstStepClassName('h-10 w-10 bg-primary rounded-full')
        setSecondStepClassName('h-10 w-10 bg-primary opacity-50 rounded-full')
        setFirsSign(String.fromCharCode(10004))
        setSecondWord('')
        setFirstLine('h-5 w-px bg-primary mt-1')
        console.log(values);
    }

    function secondFormSubmit(values: z.infer<typeof formSchema>) {

        setSecondFormDivClassName('hidden')
        setThirdFormDivClassName('')

        setSecondSign(String.fromCharCode(10004))
        setSecondStepClassName('h-10 w-10 bg-primary rounded-full')
        setThirdStepClassName('h-10 w-10 bg-primary opacity-50 rounded-full')
        setThirdWord('')
        setSecondLine('h-5 w-px bg-primary mt-1 opacity-50')

        console.log(values);
    }

    function thirdFormSubmit(values: z.infer<typeof formSchema>) {

        setThirdFormDivClassName('hidden')

        setThirdSign(String.fromCharCode(10004))
        setThirdStepClassName('h-10 w-10 bg-primary rounded-full')
        setSecondLine('h-5 w-px bg-primary mt-1')
        setFinalBlock('w-80 h-80 bg-primary')

        console.log(values);

    }

    return (
        <>

        <div className={'flex justify-center space-x-4 mt-6'}>

            <div className={`${firstFormDivClassName}`}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(firstFormSubmit)} className="space-y-8">
                        <h3 className={'font-bold m-4'}>Užpildykite formą 1</h3>
                        <div className={''}>
                            <div className={'space-y-4'}>
                                <FormField
                                    control={form.control}
                                    name="phone_number"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Telefono numeris</FormLabel>
                                            <FormControl>
                                                <Input className={'w-80'} inputMode={'tel'} placeholder="Telefono numeris" {...field}  autoFocus/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="customer_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Jūsų vardas</FormLabel>
                                            <FormControl>
                                                <Input className={'w-80 focus:ring-2 focus:ring-blue-500 focus:outline-none'} inputMode={'text'} placeholder="Vardenis Pavardenis" {...field} />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div>
                            <Button type="submit">Toliau</Button>
                        </div>


                    </form>
                </Form>
            </div>

            {/*Second Form*/}

            <div className={`${secondFormDivClassName}`}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(secondFormSubmit)} className="space-y-8">
                        <h3 className={'font-bold m-4'}>Užpildykite formą 2</h3>
                        <div className={''}>
                            <div className={'space-y-4'}>
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Adresas</FormLabel>
                                            <FormControl>
                                                <Input className={'w-80'} inputMode={'text'} placeholder="Draugystes g. 11-53" {...field}  autoFocus/>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="customer_name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Miestas</FormLabel>
                                            <FormControl>
                                                <Input className={'w-80 focus:ring-2 focus:ring-blue-500 focus:outline-none'} inputMode={'text'} placeholder="Visaginas" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>

                        <div>
                            <Button type="submit">Toliau</Button>
                        </div>


                    </form>
                </Form>
            </div>

            {/*Third Form*/}

            <div className={`${thirdFormDivClassName}`}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(thirdFormSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="visit_date"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel>Vizito data</FormLabel>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <FormControl>
                                                <Button
                                                    variant={"outline"}
                                                    className={"min-w-80 bg-transparent"+cn(
                                                        "w-[240px] pl-3 text-left font-normal",
                                                        !field.value && "text-muted-foreground"
                                                    )}
                                                >
                                                    {field.value ? (
                                                        format(field.value, "PPPP", {locale: lt})
                                                    ) : (
                                                        <span>Pasirinkti datą</span>
                                                    )}
                                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                </Button>
                                            </FormControl>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0 shadow" align="start">

                                                <Calendar
                                                    showOutsideDays
                                                    locale={lt}
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date < new Date() || date < new Date("1900-01-01")
                                                    }
                                                    initialFocus
                                                />


                                            <PopoverClose asChild>
                                                <Button>{field.value ? (
                                                  "Iškviesti " + format(field.value, "EEEE, MMMM do", {locale: lt})
                                                ) : (
                                                    <span>Pasirinkti tinkamą datą</span>
                                                )}</Button>
                                            </PopoverClose>


                                        </PopoverContent>
                                    </Popover>
                                    <FormDescription>
                                        Atvykimo laiką suderinsime telefonu
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">{form.getValues("visit_date")? `Iškviesti ${format(form.getValues("visit_date") || new Date(), "EEEE, MMMM do", {locale: lt})}`: <p>Pasirinkti datą</p>}</Button>
                    </form>
                </Form>
            </div>

            {/*Final Block*/}

            <div className={finalBlock}>

            </div>


            {/* summary*/}
            <div className={'border-2 rounded shadow'}>
                <h2 className={'font-bold m-4'}>Trys žingsniai, kad pradėti kurti savo virtuvę</h2>

                {/*First Circle*/}

                <div className={'flex ml-4 mt-1'}>
                    <div className={''}>
                        <div className={firstStepClassName}>
                            <div className={'relative text-center top-1/2 -translate-y-1/2'}><p className={'text-primary-foreground'}>{firstSign}</p></div>
                        </div>
                        <div className={'flex justify-center'}>
                            <div className={firstLine}></div>
                        </div>
                    </div>


                    <div className={'ml-2'}>
                        <div className={firstWord}><p className={'font-semibold'}>Asmeniniai duomenys</p> </div>
                        <div className={firstWord}><p>Įveskite savo vardą ir telefono numerį</p></div>
                    </div>


                </div>

                {/*Second Circle*/}

                <div className={'flex ml-4 mt-1'}>
                    <div className={''}>
                        <div className={secondStepClassName}>
                            <div className={'relative text-center top-1/2 -translate-y-1/2'}><p className={'text-primary-foreground'}>{secondSign}</p></div>
                        </div>
                        <div className={'flex justify-center'}>
                            <div className={secondLine}></div>
                        </div>
                    </div>


                    <div className={'ml-2'}>
                        <div className={secondWord}><p className={'font-semibold'}>Adresas</p> </div>
                        <div className={secondWord}><p>Vieta darbuotojui atvykti</p></div>
                    </div>
                </div>

                {/*Third Circle*/}

                <div className={'flex ml-4 mt-1'}>
                    <div className={''}>
                        <div className={thirdStepClassName}>
                            <div className={'relative text-center top-1/2 -translate-y-1/2'}><p className={'text-primary-foreground'}>{thirdSign}</p></div>
                        </div>
                        <div className={'flex justify-center'}>
                            {/*<div className={'h-5 w-px bg-primary mt-1'}></div>*/}
                        </div>

                    </div>


                    <div className={'ml-2 mb-4'}>
                        <div className={thirdWord}><p className={'font-semibold'}>Atvykimo data</p> </div>
                        <div className={thirdWord}><p>Atvykimo laiką suderinsime telefonu</p></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};