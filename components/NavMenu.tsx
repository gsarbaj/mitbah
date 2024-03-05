'use client'

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger, navigationMenuTriggerStyle,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from "next/link";

export default function NavMenu () {

    return (
        <nav className={'hidden 2xl:block xl:block lg:block'}>
            <NavigationMenu>
                <NavigationMenuList>

                    <NavigationMenuItem>
                        <Link href={'/'} legacyBehavior passHref prefetch={true}>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Matavimai
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href={'/'} legacyBehavior passHref prefetch={true}>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Materialai
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href={'/'} legacyBehavior passHref prefetch={true}>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Apmokejimas
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href={'/'} legacyBehavior passHref prefetch={true}>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Kontaktai
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>

        </nav>
    );
};
