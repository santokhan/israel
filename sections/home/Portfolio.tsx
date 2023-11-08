import Image from "next/image";

export default function Portfolio() {
    const text: Record<string, string> = {
        title: "מי אני",
        desc: `שמי כנרת דן, נעים מאוד. אני אמא של נטע ובת זוגו של תומר. בת 38 מתל אביב ואישה רגישה מאוד. במקצועי אני פסיכותרפיסטית שעובדת בגישת אקט ומיינדפולנס ומטפלת בנשים במרחבים שונים. מטפלת, מנחת סדנאות, מתרגלת ומלמדת מיינדפולנס עם ניסיון למעלה מ-15 שנים. בעברי אשת חינוך עם התמחות בצרכים מיוחדים, מדריכת הורים, צוותים ואנשי חינוך וטיפול. אני אשת משפחה, דוגלת בעקרונות הכבוד והשיוויון לכל אדם - כולל את עצמנו, מחזיקה מרחבים בטוחים ולא שיפוטיים לכל מי שבוחרת באומץ לעסוק בטיפול עצמי וכאן ללוות ולהחזיק לך את היד בדרך הייחודית לך, תוך שילוב גישות והתאמתן לצרכייך. מזמינה אותך ליצור קשר כדי לבדוק התאמה לטיפול.`,
        button: "לקבוע פגישה"
    }

    return (
        <div className="bg-app-pink">
            <div className="w-full max-w-screen-xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 lg:gap-8">
                    <Image src="" alt="" className="w-full h-full aspect-square lg:aspect-auto bg-app-green my-6 lg:my-0" />
                    <article className="w-full px-4 space-y-4 py-12 lg:py-32">
                        <h1 className="text-3xl font-bold text-app-green">{text.title}</h1>
                        <p className="text-app-green text-xl">{text.desc}</p>
                        <div className="">
                            <button type="button" className="text-white bg-app-green font-medium text-sm px-4 py-2 text-center whitespace-nowrap">{text.button}</button>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}