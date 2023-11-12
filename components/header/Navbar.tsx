'use client'

import Link from "next/link"
import Logo from "./Logo"
import { useState } from "react"

export const NavList = [
    {
        "name": "טיפול בקליניקה",
        "path": "/therapy"
    },
    {
        "name": "סדנה",
        "path": "/workshop"
    },
    {
        "name": "מוצרים",
        "path": "/shop"
    },
    {
        "name": "בלוג",
        "path": "/blog"
    },
    {
        "name": "עליי",
        "path": "/about"
    }
]

export function SocialMedia() {
    return (
        <div className="flex gap-2">
            <a href="http://instagram.com" target="_blank" rel="noopener noreferrer" className='text-app-black w-6 h-6 hover:text-app-brown focus:text-app-brown'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className='w-full h-full'
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
            <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" className='text-app-black w-6 h-6 hover:text-app-brown focus:text-app-brown'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className='w-full h-full'
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M14 9.3v2.9h2.6c.2 0 .3.2.3.4l-.4 1.9c0 .1-.2.2-.3.2H14V22h-3v-7.2H9.3c-.2 0-.3-.1-.3-.3v-1.9c0-.2.1-.3.3-.3H11V9c0-1.7 1.3-3 3-3h2.7c.2 0 .3.1.3.3v2.4c0 .2-.1.3-.3.3h-2.4c-.2 0-.3.1-.3.3Z"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeMiterlimit={10}
                        strokeLinecap="round"
                    />
                    <path
                        d="M15 22H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7v6c0 5-2 7-7 7Z"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </a>
        </div>
    )
}
export function HamBurgerMenu({ handleExpand }: { handleExpand: () => void }) {
    return (
        <button type="button" className="w-8 h-8 hover:text-app-brown" onClick={handleExpand}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full h-full" viewBox="0 0 24 24" fill="none">
                <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
            </svg>
        </button>
    )
}

export function NavLink(props: { path: string, name: string }) {
    return (
        <Link href={props.path} className={"text-app-black whitespace-nowrap hover:text-app-brown focus:text-app-brown"}>{props.name}</Link>
    )
}

export function DDNavLink(props: { path: string, name: string, handleMenu: () => void }) {
    return (
        <Link href={props.path} className={"text-app-cream whitespace-nowrap text-3xl font-semibold hover:underline"} onClick={props.handleMenu}>{props.name}</Link>
    )
}

export default function NavBar() {
    const [expand, setexpand] = useState<boolean>(false)
    function handleExpand() { setexpand(!expand) }

    return (
        <nav className="fixed w-full z-20 top-0 left-0 bg-app-cream">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
                <div className="w-full flex items-center justify-between">
                    <div className="w-8 h-8 lg:w-0 grid place-items-center lg:hidden"><HamBurgerMenu handleExpand={handleExpand} /></div>
                    <a href="/" className="flex items-center"><Logo /></a>
                    <div className="w-8"></div>
                </div>
                <div className={["hidden lg:flex items-center justify-between w-auto"].join(" ")} id="navbar-sticky">
                    <ul className="flex flex-col p-4 lg:p-0 font-medium lg:flex-row gap-y-2 lg:gap-8 lg:mt-0">
                        {NavList.map((e, i) =>
                            <li key={i}>
                                <NavLink path={e.path} name={e.name} />
                            </li>
                        )}
                    </ul>
                </div>
                <div className="w-full justify-end hidden lg:flex">
                    <SocialMedia />
                </div>
            </div>
            {expand &&
                <div className={"w-full fixed top-0 right-0 bg-app-green text-app-cream p-4 h-screen"}>
                    <div className="w-full flex items-center">
                        <button type="button" className="w-8 h-8 grid place-items-center rounded-lg text-white" onClick={handleExpand}>
                            <svg className="w-1/2 h-1/2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" /></svg><span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <ul className="grid place-items-center p-4 gap-y-6">
                        {NavList.map((e, i) =>
                            <li key={i}>
                                <DDNavLink path={e.path} name={e.name} handleMenu={handleExpand} />
                            </li>
                        )}
                    </ul>
                </div>
            }
        </nav>
    )
}