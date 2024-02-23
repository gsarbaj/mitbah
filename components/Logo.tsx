import Link from "next/link";
import Image from "next/image";
import LogoPicture from '@/resources/Logo Mitbah white.png'

export default function Logo () {

    return (
        <div className={'bg-primary p-2 my-4 pt-6 top-4'}>
            <Link href={'/'} className={'flex z-40'}>
                <Image className={'z-50 max-h-16 max-w-max'} src={LogoPicture} alt={'Virtuvės baldai logo'}/>
            </Link>
        </div>
    );
};
