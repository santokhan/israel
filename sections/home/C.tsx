import AppButton from "@/components/button/AppButton";
import Button from "@/components/button/Button";

export default function GreenCard() {
    const text = {
        title: "את לא צריכה לחכות כדי להרגיש טוב יותר",
        desc: "אם הגעת הנה אני מבינה שכבר התחלת את המסע שלך למען עצמך. להבין טוב יותר איך לפעול כשהחיים מזמנים לנו אתגרים שוב ושוב, מציגים את חוסר הוודאות של העתיד ומעירים את הפצעים של העבר. טוב שבאת. עשית את הצעד הראשון. דברי איתי ונמשיך יחד."
    }

    const flexData = [
        {
            title: "מקצועיות",
            desc: "סדנא חווייתית-טיפולית מפילת אסימונים העוזרת לך להתחבר לעצמך מחדש. הסדנא היא מסע משותף לאורך חודשיים בה אנחנו לומדות יחד, בקבוצת נשים קטנה, את כל הכלים שיאפשרו לנו להיות בנוכחות ובשלום אמיתי עם עצמנו. הסדנא מלווה בכלים ותרגולים פרקטיים ולאורכה מתעסקות ביצירה מרגיעה, מרפאת ומרחיבה את הלב",
            button: "מידע נוסף"
        },
        {
            title: "כלים פרקטיים",
            desc: "מפגש 1:1 של שעה בקליניקה שם אנחנו מדברות בגובה הלב על כל נושא שאת מעוניינת להעלות, להתלבט עליו יחד וללמוד ממנו. בטיפול אנחנו עוצרות לרגע את החיים שדוהרים לנו מול העיניים, ולוקחות בחזרה את הפיקוד על המירוץ הזה.",
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
                        <div className="text-app-black rounded-lg relative overflow-hidden bg-app-light-pink" key={i}>
                            <img src="/assets/images/green-card/card-1.png" alt="card" className="md:absolute md:inset-0 bg-white object-cover" />
                            <div className="w-full h-full bg-gradient-to-l from-white to-transparent relative">
                                <div className="md:w-1/2 grid gap-6 p-6 lg:p-8">
                                    <article className="space-y-1">
                                        <h4 className="text-3xl font-medium text-app-black">{e.title}</h4>
                                        <p className="text-app-black font-medium">{e.desc}</p>
                                    </article>
                                    <div className="">
                                        <Button.Brown>{e.button}</Button.Brown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}