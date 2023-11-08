import BreadCrumb from '@/components/breadcrumb/Breadcrumb'
import Button from '@/components/button/Button'
import Image from 'next/image';
import Image1 from '../../assets/images/shop/1.png'
import Image2 from '../../assets/images/shop/2.png'
import Image3 from '../../assets/images/shop/3.png'

import Link from "next/link";

export function Books() {
    const title = "מדריכים"
    const text = {
        button: "להורדה"
    }
    const flexData: Array<Record<string, any>> = [
        {
            src: Image1
        },
        {
            src: Image2
        },
        {
            src: Image3
        },
    ]

    return (
        <div className="py-12 lg:py-20">
            <div className="w-full max-w-screen-xl mx-auto px-4 space-y-6">
                <h1 className="text-3xl font-bold text-app-brown">{title}</h1>
                <hr className="border-t-2 border-app-brown" />
                <div className="flex justify-evenly gap-4">
                    {flexData.map((e, i) =>
                        <div className="w-full max-w-xs text-app-brown hover:text-app-green grid place-items-center gap-8" key={i}>
                            <Image src={e.src} alt="" className="w-full h-full aspect-square bg-app-light-green object-cover" />
                            <Button.Green>{text.button}</Button.Green>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}

export default function Page() {

    return (
        <>
            <BreadCrumb />
            <Books />
        </>
    )
}


