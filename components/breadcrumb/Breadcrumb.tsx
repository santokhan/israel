'use client'

import { usePathname } from "next/navigation"
import { NavList } from "../header/Navbar"

export default function BreadCrumb() {
    function getName(): string {
        const path = usePathname()
        const firstPath = path.split("/")[1]

        let name;

        NavList.forEach(e => {
            if (e.path.includes(firstPath)) {
                name = e.name
            }
        })
        return name || "";
    }

    return (
        <section className="bg-app-green">
            <div className="w-full max-w-screen-xl mx-auto px-4 py-20 grid place-items-center">
                <h1 className="text-4xl font-bold text-app-cream">{getName()}</h1>
            </div>
        </section>
    )
}