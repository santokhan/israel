'use client'
import Image from "next/image";
import { useState } from "react";

export default function Gallary() {
    const title = "Kineretdan"

    const [imageList, setimageList] = useState<Array<{ src: string }>>([
        {
            src: "",
        },
        {
            src: "",
        },
        {
            src: "",
        },
        {
            src: "",
        },
        {
            src: "",
        },
        {
            src: "",
        },
    ])

    return (
        <div className="py-12">
            <div className="w-full max-w-screen-xl mx-auto px-4 flex flex-col gap-6">
                <a className="text-xl font-medium text-app-brown flex items-center justify-center gap-2">
                    <span>{title}</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className='w-7 h-7'
                        viewBox="0 0 24 24"
                        fill="none"
                    >
                        <path
                            d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M17.636 7h.012"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                    {imageList.map((e, i) =>
                        <figure className="w-full" key={i}>
                            <Image src={""} alt="" className="w-full h-full bg-app-light-green aspect-square object-cover" />
                        </figure>
                    )}
                </div>
            </div>
        </div>
    );
}