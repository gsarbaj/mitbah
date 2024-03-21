import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import Navbar from "@/components/Navbar";
import FooterComponent from "@/components/footer";
import {CookiesProvider} from 'next-client-cookies/server';

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: {
        default: "Virtuvės baldai",
        template: "Virtuvės baldai - %s"
    },
    description: "Virtuvės baldai - Prabanga prieinama kiekvienam. Virtuvės baldų gamyba pagal individualius užsakymus",
    keywords: "Virtuvės baldai, baldai pagal užsakymą",
    formatDetection: {
        telephone: false,
        date: false,
        email: false,
        address: false
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html className={'scroll-smooth'} lang="lt">

        <body className={cn('min-h-screen  grainy', inter.className)}>
        <Navbar/>
        {children}
        <FooterComponent/>
        </body>

        </html>
    );
}