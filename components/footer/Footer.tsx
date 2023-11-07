import FooterLogo from "./FooterLogo"

const footerFormTitle = "הרשמה לירחון מתנה במייל"
const footerFormDesc = "הרשמי לקבלת הירחון בו כל חודש יעלו הדרכות חינמיות ועדכונים מעניינים שמיועד לנשים רגישות שמעוניינות לחיות חיים מאושרים ורגועים."
const rememberMe = "אני מאשרת לקבל דיוור במייל/בהודעה"

export const FNavList: Record<string, Array<any>> = {
    "שירות": [
        {
            name: "טיפול בקליניקה",
            path: ""
        },
        {
            name: "סדנה",
            path: ""
        },
        {
            name: "מוצרים",
            path: ""
        },
    ],
    "אודות": [
        {
            name: "בלוג",
            path: ""
        },
        {
            name: "עליי",
            path: ""
        },
    ],
}

export const socialMediaTitle = "להתחבר אלי"

export default function Footer() {
    return (
        <footer className="bg-app-light-gray text-app-black">
            <div className="w-full max-w-screen-xl mx-auto px-4 py-6 flex flex-wrap">
                <div className="w-4/12 flex flex-wrap gap-8">
                    {Object.keys(FNavList).map((e, i) =>
                        <div className="">
                            <h3 className="font-semibold">{e}</h3>
                            <div className="flex flex-col justify-start">
                                {FNavList[e].map((e2: any, i: number) =>
                                    <a href="#" key={i} className="w-auto">{e2.name}</a>
                                )}
                            </div>
                        </div>
                    )}
                    <div className="">
                        <h3 className="font-semibold">{socialMediaTitle}</h3>
                    </div>
                </div>
                <div className="w-6/12">
                    <div className=""></div>
                    <div className="">
                        <form>
                            <h2 className="text-2xl font-semibold">{footerFormTitle}</h2>
                            <p className="text-lg">{footerFormDesc}</p>
                            <label className="text-sm flex items-center gap-2"><input type="checkbox" name="" id="" />{rememberMe}</label>
                        </form>
                    </div>
                </div>
                <div className="w-2/12">
                    <FooterLogo />
                </div>
            </div>
        </footer>
    )
}