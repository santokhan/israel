export default function Header() {
    const text = {
        title: "את לא צריכה לחכות כדי להרגיש טוב יותר",
        desc: "אם הגעת הנה אני מבינה שכבר התחלת את המסע שלך למען עצמך. להבין טוב יותר איך לפעול כשהחיים מזמנים לנו אתגרים שוב ושוב, מציגים את חוסר הוודאות של העתיד ומעירים את הפצעים של העבר. טוב שבאת. עשית את הצעד הראשון. דברי איתי ונמשיך יחד.",
        button: "לקבוע פגישה"
    }

    return (
        <header className="bg-app-light-pink bg-header-banner text-app-green">
            <div className="max-w-screen-xl mx-auto px-4 grid lg:grid-cols-2 gap-20">
                <article className="w-full px-4 py-40 lg:py-60 space-y-4">
                    <h1 className="text-5xl font-bold">{text.title}</h1>
                    <p className="text-3xl">{text.desc}</p>
                    <div className="">
                        <button type="button" className="text-white bg-app-green font-medium text-sm px-4 py-2 text-center whitespace-nowrap">{text.button}</button>
                    </div>
                </article>
                <div className="lg:w-full"></div>
            </div>
        </header>
    )
}
