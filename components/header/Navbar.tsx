import Link from "next/link"
import Logo from "./Logo"

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

export default function NavBar() {
    return (
        <nav className="fixed w-full z-20 top-0 left-0 bg-app-cream">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div>
                    <a href="#" className="flex items-center">
                        <Logo />
                    </a>
                </div>
                <div
                    className="items-center justify-between hidden w-full md:flex md:w-auto"
                    id="navbar-sticky"
                >
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:gap-8 md:mt-0">
                        {NavList.map((e, i) =>
                            <li key={i + 'a'} className="">
                                <Link href={e.path} className={"text-app-black"}>{e.name}</Link>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="flex gap-2">
                    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" className='text-app-black'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className='w-7 h-7'
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
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer" className='text-app-black'>
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
                </div>
            </div>
        </nav>
    )
}