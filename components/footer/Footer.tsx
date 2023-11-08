'use client'

import { NavLink, NavList, SocialMedia } from "../header/Navbar"
import FooterLogo from "./FooterLogo"

const footerFormTitle = "הרשמה לירחון מתנה במייל"
const footerFormDesc = "הרשמי לקבלת הירחון בו כל חודש יעלו הדרכות חינמיות ועדכונים מעניינים שמיועד לנשים רגישות שמעוניינות לחיות חיים מאושרים ורגועים."
const rememberMe = "אני מאשרת לקבל דיוור במייל/בהודעה"

export const FNavList: Record<string, Array<{ name: string, path: string }>> = {
    "שירות": [...NavList].splice(0, 3),
    "אודות": [...NavList].splice(3, 2),
}

export const socialMediaTitle = "להתחבר אלי"

export default function Footer() {
    const text = {
        submit: "אני רוצה להצטרף",
        input: ["שם מלא", "טלפון", "מייל"]
    }

    return (
        <footer className="bg-app-light-gray text-app-black py-10">
            <div className="w-full max-w-screen-xl mx-auto px-4 flex flex-wrap lg:flex-nowrap justify-between gap-6 lg:gap-12">
                <div className="w-full lg:w-4/12 xl:w-3/12 flex flex-wrap gap-8 order-2 lg:order-1">
                    {Object.keys(FNavList).map((e: string, i: number) =>
                        <div className="space-y-1">
                            <h3 className="font-semibold">{e}</h3>
                            <div className="grid gap-1">
                                {FNavList[e].map((e2, i: number) =>
                                    <NavLink path={e2.path} name={e2.name} key={i} />
                                )}
                            </div>
                        </div>
                    )}
                    <div className="space-y-1">
                        <h3 className="font-semibold">{socialMediaTitle}</h3>
                        <SocialMedia />
                    </div>
                </div>
                <div className="w-full lg:w-9/12 flex flex-wrap lg:flex-nowrap gap-6 lg:gap-12 order-1 lg:order-2">
                    <form className="order-2 lg:order-1">
                        <article>
                            <h2 className="text-2xl font-semibold">{footerFormTitle}</h2>
                            <p className="text-lg">{footerFormDesc}</p>
                        </article>
                        <div className="flex flex-wrap xl:flex-nowrap gap-6 mb-2 items-center lg:items-end">
                            <div className="w-full grid sm:grid-cols-3 gap-6">
                                <div className="">
                                    <input type="text" name="" id="" placeholder="שם מלא" className="w-full border-b-2 border-app-black py-0.5 bg-transparent focus:outline-none" />
                                </div>
                                <div className="">
                                    <input type="text" name="" id="" placeholder="טלפון" className="w-full border-b-2 border-app-black py-0.5 bg-transparent focus:outline-none" />
                                </div>
                                <div className="">
                                    <input type="text" name="" id="" placeholder="מייל" className="w-full border-b-2 border-app-black py-0.5 bg-transparent focus:outline-none" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="block xl:hidden">
                                    <label className="text-sm flex items-center gap-2 whitespace-nowrap"><input type="checkbox" name="" id="" className="" />{rememberMe}</label>
                                </div>
                                <button
                                    type="button"
                                    className="text-gray-900 hover:text-white border border-gray-800 hover:bg-app-black font-medium text-sm px-4 py-1.5 text-center whitespace-nowrap"
                                >{text.submit}</button>
                            </div>
                        </div>
                        <label className="text-sm xl:flex items-center gap-2 hidden white"><input type="checkbox" name="" id="" className="" />{rememberMe}</label>
                    </form>
                    <div className="w-auto order-1 lg:order-2">
                        <FooterLogo />
                    </div>
                </div>
            </div>
        </footer>
    )
}