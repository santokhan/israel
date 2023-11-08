import AppButton from "@/components/button/AppButton";

export default function HomeC() {
    const text = {
        title: "את לא צריכה לחכות כדי להרגיש טוב יותר",
        desc: "אם הגעת הנה אני מבינה שכבר התחלת את המסע שלך למען עצמך. להבין טוב יותר איך לפעול כשהחיים מזמנים לנו אתגרים שוב ושוב, מציגים את חוסר הוודאות של העתיד ומעירים את הפצעים של העבר. טוב שבאת. עשית את הצעד הראשון. דברי איתי ונמשיך יחד."
    }

    const flexData = [
        {
            title: "מקצועיות",
            desc: "ניסיון והכשרה מקצועית רחבה שעוברת אליך בצורה נגישה, במילים פשוטות ומחוברות אליך ולצרכים שלך.",
            button: "מידע נוסף"
        },
        {
            title: "כלים פרקטיים",
            desc: "כדי שתדעי איך לפעול ולצאת ממצבים מלאי סטרס וחרדה ביומיום גם אם לא השלמת את כל המסע שלך עדיין.",
            button: "מידע נוסף"
        },
    ]

    return (
        <div className="py-12 lg:py-20 bg-app-green">
            <div className="w-full max-w-screen-xl mx-auto px-4 space-y-8">
                <div className="max-w-screen-sm mx-auto text-center">
                    <article className="w-full px-4 space-y-4">
                        <h1 className="text-3xl font-bold text-app-light-pink">{text.title}</h1>
                        <p className="text-app-light-pink">{text.desc}</p>
                    </article>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap">
                    {flexData.map((e, i) =>
                        <div className="p-4" key={i}>
                            <div className="md:basis-1/2 lg:basis-1/3 grid gap-6 bg-app-gradient text-app-black p-8 rounded-lg">
                                <article className="space-y-1">
                                    <h4 className="text-2xl font-medium text-app-brown">{e.title}</h4>
                                    <p className="text-app-brown">{e.desc}</p>
                                </article>
                                <div className="">
                                    <button type="button" className="font-medium text-sm px-4 py-2 whitespace-nowrap bg-app-brown text-app-light-pink">
                                        {e.button}
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}