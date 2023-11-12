'use client'

import { useState } from "react"

type Props = {
    title: string
    desc: string
}

export function AccordionItem(props: Props) {
    const [expand, setexpand] = useState<boolean>(false)

    function handleExpand() {
        setexpand(!expand)
    }

    return (
        <div className="bg-app-gradient text-app-black py-4 border-b border-app-black" >
            <button className="w-full flex gap-4 justify-between items-center text-app-black" onClick={handleExpand}>
                <h4 className="text-xl font-medium">{props.title}</h4>
                {
                    expand ?
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-app-brown" viewBox="0 0 24 24" fill="none"><path d="M6 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-app-brown" viewBox="0 0 24 24" fill="none"><path d="M6 12h12M12 18V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                }
            </button>
            {expand && <p className="text-app-black">{props.desc}</p>}
        </div>
    )
}

export default function Accordion() {
    const accordionTitle = "עוד על פסיכותרפיה ושאלות חשובות נוספות"
    const flexData = [
        {
            title: "מה זה פסיכותרפיה בכלל?",
            desc: "רחוב אשרמן 11 תל אביב",
        },
        {
            title: "מה זה CBT?",
            desc: "רחוב אשרמן 11 תל אביב",
        },
        {
            title: "מה זה אקט (ACT)?",
            desc: "רחוב אשרמן 11 תל אביב",
        },
        {
            title: "מה זה מיינדפולנס?",
            desc: "רחוב אשרמן 11 תל אביב",
        },
        {
            title: "מה זה מרחבים בטוחים?",
            desc: "רחוב אשרמן 11 תל אביב",
        },
        {
            title: "איפה הקליניקה נמצאת?",
            desc: "רחוב אשרמן 11 תל אביב",
        },
    ]

    return (
        <div className="py-8 lg:py-16">
            <div className="w-full max-w-screen-xl mx-auto px-4">
                <h1 className="text-3xl font-bold text-app-brown mb-4">{accordionTitle}</h1>
                <hr className="border-t border-app-black" />
                <div className="">
                    {flexData.map((e, i) =>
                        <AccordionItem title={e.title} desc={e.desc} />
                    )}
                </div>
            </div>
        </div>
    );
}