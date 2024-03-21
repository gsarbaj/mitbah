import FooterSection from "@/components/FooterSection";
import Link from "next/link";

export default function FooterComponent () {

    const year = new Date().getFullYear().toString()

    return (
        <footer className={'w-full pt-2 mt-4 bg-primary text-primary-foreground'}>
            {/*up block*/}
            <div className={'ml-2 flex'}>
                {/*@ts-ignore*/}
                <FooterSection title={"Pasiruošęs padėti"}>
                    <Link href={'/1'}>Virtuvės gamyba</Link>
                    <Link href={'/2'}>Pristatymo informacija</Link>
                    <Link href={'/3'}>Garantinis aptarnavimas</Link>
                    <Link href={'/4'}>Virtuvės surinkimas</Link>
                </FooterSection>
                {/*@ts-ignore*/}
                <FooterSection title={"Apie Mus"}>
                    <Link href={'/1'}>Kontaktai</Link>
                    <Link href={'/2'}>Darbo pasiūlymai</Link>
                    <Link href={'/3'}>Baldai</Link>
                    <Link href={'/4'}>Baldai</Link>
                </FooterSection>
            </div>

           {/*bottom block*/}
            <div className={'border-t'}>

                <div className={'ml-2 pb-4 pt-2'}>
                    <p className={'text-sm antialiased'}><span>&copy;</span> Imta ES, MB {year} Visos teisės saugomos. <Link href={'/'}>Privatumo politika</Link></p>
                </div>

            </div>
        </footer>
    );
};
