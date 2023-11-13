import Button from "../button/Button"

export default function Header() {
    const text = {
        title: "את לא צריכה לחכות כדי להרגיש טוב יותר",
        desc: "אם הגעת הנה אני מבינה שכבר התחלת את המסע שלך למען עצמך. להבין טוב יותר איך לפעול כשהחיים מזמנים לנו אתגרים שוב ושוב, מציגים את חוסר הוודאות של העתיד ומעירים את הפצעים של העבר. טוב שבאת. עשית את הצעד הראשון. דברי איתי ונמשיך יחד.",
        button: "לקבוע פגישה"
    }

    return (
        <header className="bg-app-light-pink text-app-green relative">
            <img src="/assets/images/header/banner.png" alt="header" className="hidden lg:block absolute left-0 top-0 bottom-0 w-1/2 h-full object-cover" />
            <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2 md:gap-20">
                <article className="w-full px-4 py-16 md:py-40 lg:py-60 space-y-4">
                    <h1 className="text-4xl lg:text-5xl font-bold">{text.title}</h1>
                    <p className="text-2xl lg:text-3xl">{text.desc}</p>
                    <div className="">
                        <Button.Green>{text.button}</Button.Green>
                    </div>
                </article>
                <div className="block lg:hidden lg:w-full">
                    <img src="/assets/images/header/banner.png" alt="header" className="w-full aspect-square object-cover" />
                </div>
            </div>
        </header>
    )
}
