'use client'

import {useState} from "react";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {Button, buttonVariants} from "@/components/ui/button";
import {RowsIcon} from "@radix-ui/react-icons";
import Link from "next/link";
import {redirect} from "next/navigation";


export default function MobileNavbar () {

    const [isOpen, setOpen] = useState<boolean>(false);
    const toggleOpen = () => setOpen((prev) => !prev)

    return (
        <div className={'lg:hidden'}>
            <Drawer>
                <DrawerTrigger asChild>
                    <Button>
                        <RowsIcon fontSize={43} className={'text-6xl'}/>
                    </Button>

                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                        <DrawerDescription>This action cannot be undone.</DrawerDescription>
                    </DrawerHeader>
                    <DrawerFooter>

                        <DrawerClose asChild><Button asChild ><Link href={'/'} prefetch={true}>Pagrindinis</Link></Button></DrawerClose>
                        <DrawerClose asChild><Button asChild ><Link href={'/'} prefetch={true}>Matavimai</Link></Button></DrawerClose>
                        <DrawerClose asChild><Button asChild ><Link href={'/'} prefetch={true}>Materialai</Link></Button></DrawerClose>
                        <DrawerClose asChild><Button asChild ><Link href={'/'} prefetch={true}>Apmokejimas</Link></Button></DrawerClose>
                        <DrawerClose asChild><Button asChild ><Link href={'/'} prefetch={true}>Kontaktai</Link></Button></DrawerClose>
                        <br/>
                        {/*<DrawerClose asChild>*/}
                        {/*    <Button variant="outline">Uždaryti</Button>*/}
                        {/*</DrawerClose>*/}

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </div>
    );
};
