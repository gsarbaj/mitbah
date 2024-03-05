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

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phone_number: "+370"
        }
    })



    function firstFormSubmit(values: z.infer<typeof formSchema>) {

        setFirstFormDivClassName('hidden')
        setSecondFormDivClassName('')
        console.log(values);
    }

    function secondFormSubmit(values: z.infer<typeof formSchema>) {

        setSecondFormDivClassName('hidden')
        setThirdFormDivClassName('')
        console.log(values);
    }

    function thirdFormSubmit(values: z.infer<typeof formSchema>) {

        setThirdFormDivClassName('hidden')
        console.log(values);
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
            ),
        })
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
                                                    className={cn(
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
                                        <PopoverContent className="w-auto p-0" align="start">
                                            <Calendar
                                                locale={lt}
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={(date) =>
                                                    date < new Date() || date < new Date("1900-01-01")
                                                }
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                    <FormDescription>
                                        Your date of birth is used to calculate your age.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>


            {/* summary*/}
            <div className={'border-2 rounded'}>
                <h2 className={'font-bold m-4'}>Trys žingsniai, kad pradėti kurti savo virtuvę</h2>

                <div>
                   <div className={'h-10 w-10 bg-primary rounded-full'}>
                       <div className={'relative text-center top-1/2 -translate-y-1/2'}>1</div>
                   </div>
                </div>



            </div>

        </div>



        </>
    );
};