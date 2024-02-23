'use client'
import * as z from 'zod';
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {db} from '@/db/'
import * as action from '@/actions/index'

const formSchema = z.object({
    emailAddress: z.string().email(),
    phoneNumber: z.string(),
    first_name: z.string(),
    last_name: z.string()
})

export default function TestForm() {



    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            emailAddress: '',
            phoneNumber: '+370'
        }
    });


    return (
        <>
            <Form {...form} >
                <form action={action.createTest} className={'max-w-md w-full'}>
                    <FormField control={form.control} name={'emailAddress'} render={({field}) => {
                        return (
                            <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input type={'email'} placeholder={'Email'} {...field} name={'emailAddress'}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )
                    }}>

                    </FormField>
                    <FormField control={form.control} name={'phoneNumber'} render={({field}) => {
                        return (
                            <FormItem>
                                <FormLabel>Phone Number</FormLabel>
                                <FormControl>
                                    <Input type={'tel'} placeholder={'Phone Number'} {...field} name={'phoneNumber'}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )
                    }}>

                    </FormField>
                    <FormField control={form.control} name={'first_name'} render={({field}) => {
                        return (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input type={'text'} placeholder={'First Name'} {...field} name={'first_name'}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )
                    }}>

                    </FormField>
                    <FormField control={form.control} name={'last_name'} render={({field}) => {
                        return (
                            <FormItem>
                                <FormLabel>First Name</FormLabel>
                                <FormControl>
                                    <Input type={'text'} placeholder={'Last Name'} {...field} name={'last_name'}/>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )
                    }}>

                    </FormField>
                    <Button type={'submit'}>
                        Submit
                    </Button>
                </form>
            </Form>
        </>
    );
};
