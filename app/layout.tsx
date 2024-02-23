import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {cn} from "@/lib/utils";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Virtuvės baldai",
    template: "Virtuvės baldai - %s"
  },
  description: "Virtuvės baldai - Prabanga prieinama kiekvienam. Virtuvės baldų gamyba pagal individualius užsakymus",
  keywords: "Virtuvės baldai, baldai pagal užsakymą"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="lt">
      <body className={cn('min-h-screen antialiased grainy', inter.className)}>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
