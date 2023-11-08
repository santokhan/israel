import AppButton from "@/components/button/AppButton";
import Image from "next/image";

export default function GreenCard() {
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
                <div className="grid lg:grid-cols-2 gap-4">
                    {flexData.map((e, i) =>
                        <div className="text-app-black p-8 rounded-lg relative overflow-hidden space-y-4 bg-app-pink" key={i}>
                            <Image src="" alt="" className="aspect-video md:aspect-auto md:inset-0 md:absolute" />
                            <div className="md:w-1/2 grid gap-6 relative">
                                <article className="space-y-1">
                                    <h4 className="text-3xl font-medium text-app-brown">{e.title}</h4>
                                    <p className="text-app-brown text-xl">{e.desc}</p>
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