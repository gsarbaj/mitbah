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


export default function MobileNavbar () {

    const [isOpen, setOpen] = useState<boolean>(false);
    const toggleOpen = () => setOpen((prev) => !prev)

    return (
        <>
            <Drawer>
                <DrawerTrigger>
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
                        <Link href={'/'} className={buttonVariants({variant: 'default', size: 'lg'})}>Matavimai</Link>
                        <Link href={'/'} className={buttonVariants({variant: 'default', size: 'lg'})}>Materialai</Link>
                        <Link href={'/'} className={buttonVariants({variant: 'default', size: 'lg'})}>Apmokejimas</Link>
                        <Link href={'/'} className={buttonVariants({variant: 'default', size: 'lg'})}>Kontaktai</Link>
                        <br/>
                        <DrawerClose>
                            <Button variant="outline">Uždaryti</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>

        </>
    );
};
