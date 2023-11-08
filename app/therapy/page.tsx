import BreadCrumb from '@/components/breadcrumb/Breadcrumb'
import Button from '@/components/button/Button'
import Image from 'next/image';
import Image1 from '../../assets/images/therapy/1.png'
import Image2 from '../../assets/images/therapy/2.png'

export function SectionA() {
    const firstFlex = {
        title: "איך לקבוע מפגש?",
        desc: "הנגשתי לך את היומן שלי כדי שתוכלי לקבוע בעצמך ולפי רצונך את הטיפול שמתאים לך"
    }

    const flexData = [
        {
            title: "מקצועיות",
            desc: "ניסיון והכשרה מקצועית רחבה שעוברת אליך בצורה נגישה, במילים פשוטות ומחוברות אליך ולצרכים שלך.",
        },
        {
            title: "כלים פרקטיים",
            desc: "כדי שתדעי איך לפעול ולצאת ממצבים מלאי סטרס וחרדה ביומיום גם אם לא השלמת את כל המסע שלך עדיין.",
        },
        {
            title: "מרחב בטוח",
            desc: "כל מה שאת מביאה איתך מקבל מקום, אין פה ביקורת או אשמה, לומדות להסתכל לבושה בעיניים ולחבק אותה. ללא שיפוטיות ובקבלה מלאה.",
        },
    ]

    return (
        <section>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 justify-center items-center">
                <div className="sapce-y-2 text-app-black p-4 lg:p-6">
                    <h4 className="text-3xl font-medium text-app-green">{firstFlex.title}</h4>
                    <h4 className="font-medium text-app-black">{firstFlex.desc}</h4>
                </div>
                {flexData.map((e, i) =>
                    <div className="sapce-y-2 bg-app-light-pink text-app-black p-6 rounded-lg" key={i}>
                        <h4 className="text-3xl font-medium text-app-green">0{i + 1}</h4>
                        <h4 className="font-medium text-app-black">{e.title}</h4>
                    </div>
                )}
            </div>
        </section>
    );
}

export function SectionB() {
    const text = {
        title: "מצאי את הטיפול המדויק לך",
        desc: "למעבר לסדנאות"
    }

    const cardList = [
        {
            title: "נפגשות בקליניקה",
            desc: "מפגש בודד בקליניקה להיכרות, ייעוץ והכוונה בעזרת שיחה, תרגול מיינדפולנס והיכרות עם עולם הרגשות של המטופלת כדי להאיר את הזרקור אל מה שרוצה לקבל מקום, להיפתר ולהשתחרר ממך. מתאים גם במתכונת של הדרכת הורים.",
            button: "למעבר ליומן לתיאום עצמאי",
            src: Image1
        },
        {
            title: "תכנית ליווי בשמונה מפגשים",
            desc: "האם את מחזיקה בדבר מה שמפריע לך בחיי היומיום? זה יכול להיות חרדה, דיכאון, פחדים, ערך עצמי נמוך, ביטחון עצמי נמוך, דפוסי התנהגות מזיקים, תקיעות, תחושת מסוגלות נמוכה ועוד. יכול להיות שאת בכלל לא מצליחה להבין עם עצמך מה הבעיה אבל את יודעת ומרגישה שישנה כזו וכעת הגעת לנקודה בחיים שאת מעוניינת לקחת פיקוד ולשנות את זה. בתוכנית הליווי אנחנו ניכנס לעומק העניין ונסתכל עליו באומץ ביחד. נצא למסע משותף לשחרור הקושי בכדי לאפשר לך לחיות חיים מלאים, רגועים ושמחים. הליווי נעשה בצורה רגישה לצרכייך אך יעילה ופרקטית עם הפניית הזרקור בדיוק לנושאים היכולים לשחרר אותך מדפוסי חשיבה מזיקים, להפחית את העומס והסטרס ולהגביר את החמלה העצמית. המפגשים מתקיימים בקליניקה אחת לשבוע למשך 8 מפגשים.",
            button: "למעבר ליומן לתיאום עצמאי",
            src: Image2
        },
    ]

    return (
        <section className="space-y-10">
            <h4 className="text-3xl font-medium text-app-brown text-center">{text.title}</h4>
            <div className="grid lg:grid-cols-2 gap-8">
                {cardList.map((e, i) =>
                    <div className="bg-white" key={i}>
                        <figure>
                            <Image src={e.src} alt="" className="w-full aspect-video object-cover" />
                        </figure>
                        <div className="p-6 space-y-4">
                            <h4 className="text-3xl font-bold text-app-brown">{e.title}</h4>
                            <p className="text-app-black">{e.desc}</p>
                            <Button.Brown>{e.button}</Button.Brown>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
export function SectionC() {
    const text = {
        title: "לא בטוחה אם מתאים לך מפגש 1:1 בקליניקה? מתלבטת? תציצי בעמוד הסדנאות, יכול להיות ששם תמצאי התאמה טובה יותר.",
        button: "למעבר לסדנאות"
    }

    return (
        <section>
            <div className="py-10 bg-app-light-green">
                <div className="max-w-md mx-auto grid place-items-center gap-4 text-center">
                    <p>{text.title}</p>
                    <Button.Green>{text.button}</Button.Green>
                </div>
            </div>
        </section>
    )
}

export default function Page() {

    return (
        <>
            <BreadCrumb />
            <div className="w-full max-w-screen-xl mx-auto px-4 space-y-12 lg:space-y-20 py-12 lg:py-20">
                <SectionA />
                <hr />
                <SectionB />
                <SectionC />
            </div>
        </>
    )
}


