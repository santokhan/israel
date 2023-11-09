import Image from 'next/image'
import Image1 from '../../assets/images/about/1.png'
import Image2 from '../../assets/images/about/2.png'

export function AboutSection() {
    const text = {
        title: "המסע שלי",
    }

    const about = [
        {
            desc: "את דרכי הטיפולית התחלתי עם ילדים בגיל הרך בחינוך המיוחד. מאז ומתמיד העדפתי את חברתם של ילדים. האותנטיות, היצירתיות, הפעולה מתוך הנאה והשראה, חקר וסקרנות תמידית ופשוט חיפוש מדויק אחרי מה שמעניין אותם והופך אותם מאושרים הובילו ומשכו אותי לרצות להיות בחברתם ולהפוך לאותנטית ביותר עבורי ועבורם. כשנכנסו לחיי לראשונה ילדים מיוחדים וייחודיים (ועם צרכים מיוחדים) נפעמתי מדרך החשיבה השונה ומהאופן בו הם רואים וחווים את העולם אחרת. הסתקרנתי ונמשכתי להבין ולחקור איך אני יכולה לגשת ולהתחבר ובסופו של דבר להבין ולסייע בתרגום של הרגשות והרצונות שלהם בחזרה אל העולם שסביבם. עבדתי כדי למצוא דרכים יצירתיות להגיע אליהם בצורה הכי מדויקת ולעזור להם להתפתח בדרך שנכונה להם. כשכבר התחלתי לעבוד בגנים של החינוך המיוחד וניהלתי גנים משלי העולם שלי התרחב כפליים. נחשפתי למעגלים התומכים, שהיום אני רואה כמעגלים הוליסטיים שמחוברים בצורה הדוקה אל הילדים, אל ההורים והמשפחה (וגם לכל אנשי הצוות שבחרו לעבוד בעבודה כל כך מדהימה כי גם בהם יש את הקריאה הפנימית הזו) ונחתה בי ההבנה שבכדי להגיע אל הילד לא מספיק שרק אני אעשה את זה אלא כל מי שאיכשהו קשור וחלק מהחיים. בשלב הזה התחלתי להדריך צוותים רחבים מנקודת המבט הזו, הכשרתי סטודנטיות לחינוך מיוחד בעבודתן הפרקטית בשטח תוך קשר ישיר עם המכללות לחינוך שבהן לומדות, ליוויתי קבוצות של סטודנטיות לקלינאות תקשורת, פיזיותרפיה וריפוי בעיסוק וגם עבדתי צמוד עם סטודנטיות לעבודה סוציאלית.",
            src: ""
        },
        {
            desc: "עם השנים וככל שפגשתי עוד ועוד משפחות בגנים ובקליניקה, כך האמפתיה שלי אל ההורים גברה והרגשתי את הצורך הזועק של ההורים שייראו גם אותם. הם, שנותנים את הכל למען ילדם ולמען אחרים זקוקים לרגע אחד שמישהו יראה אותם, יבחין בקושי שלהם ויאפשר להם לפרוק, לזהות איפה הם נמצאים, להבין מה מדויק להם וללמוד כלים פרקטיים. הנקודה הזו, ביחד עם ההבנה שילד-הורה זה מקשה אחת גרמו לי להשקיע זמן וקשב רב בהורים עצמם ולתת להם את ההכרה והכלים שלהם הם זקוקים. כאשר אני הפכתי לאמא בעצמי לפני שנתיים נוכחתי לראות ממקור ראשון כמה לתת ולהיות עבור מישהו אחר יכול להיות הדבר הכי עוצמתי ומדהים שעשיתי בחיי אבל במקביל כמה שבירות בזהות שלי, חרדות, פחדים, אפיסת כוחות ותסכול יש בתפקיד הזה. הייתי צריכה ללמוד מחדש מי אני כאדם, כאמא, כבת זוג, כאשת מקצוע. מה מעניין אותי, מה מוביל אותי, מה מדויק לי. מתוך המקום הזה, ומתוך משבר רפואי משפחתי שעברתי בשנים האחרונות, הבנתי שהבחירה שלנו בעצמנו היא לא מותרות אלא הכרח. הכנסתי את עצמי אל סדר העדיפויות בכדי שאוכל לחיות חיים טובים ומאושרים וכדי שאוכל לטפל באחרים בצורה מלאה, מתוך השראה ורצון. וזה בדיוק מה שאני עושה בקליניקה שלי בטיפולים הפרטניים ובסדנאות הקבוצתיות עם כל מי שמגיעה אליי לטיפול. בשיח משותף אנחנו מביאות אותה אל סדר העדיפויות, לומדות לנקות את כל מה שכבר לא רלוונטי ולא משרת אותה יותר, מגלות ומנכסות מחדש את הכוחות שלה, מתרגלות מדיטציה ביחד (לא מחייב, רק מי שרוצה) ומדייקות אותה לעצמה יחד עם כלים פרקטיים שיאפשרו לה לחיות חיים רגועים ומאושרים יותר, כמו שמגיע לה.",
            src: ""
        },
    ]

    return (
        <section className="space-y-6">
            <div className="grid lg:grid-cols-12 lg:gap-4 text-app-black p-8 items-center">
                <Image src={Image1} alt="" className="col-span-5 w-full lg:h-full object-contain" />
                <div className="col-span-7 space-y-4">
                    <h4 className="text-4xl font-bold text-app-brown">{text.title}</h4>
                    <p className="text-app-black text-lg">{about[0].desc}</p>
                </div>
            </div>
            <div className="grid lg:grid-cols-12 lg:gap-4 text-app-black p-8 items-center">
                <div className="col-span-7 space-y-4 order-2 lg:order-1">
                    <p className="text-app-black text-lg">{about[1].desc}</p>
                </div>
                <Image src={Image2} alt="" className="col-span-5 w-full lg:h-full object-contain order-1 lg:order-2" />
            </div>
        </section>
    );
}

export function SectionB() {
    const text = {
        title: "ניסיון בשטח",
    }

    const flexData = [
        {
            desc: "טיפולים בקליניקה פרטית, בעמותות והנחיית סדנאות ב- 6 שנים האחרונות.העבודה הפרטנית החלה מתוך רצון להעמיק תהליכים שלא בהכרח הצליחו לקבל מענה מספק בתוך מסגרת.",
        },
        {
            desc: "עבודת שטח צמודה עם ילדים, הדרכת הורים, צוותים וסטודנטים במסגרות שונות בירושלים ובתל אביב ב-15 שנה האחרונות. החשיבות להיצמד ולהישאר בשטח היא קריטית בעיני כי שם הדברים נמצאים באמת.",
        },
    ]

    return (
        <section className="space-y-6">
            <h4 className="text-4xl font-bold text-app-brown text-center">{text.title}</h4>
            <div className="flex gap-6 lg:gap-8 justify-center items-center">
                {flexData.map((e, i) =>
                    <div className="max-w-lg space-y-2 bg-app-light-gray text-app-black p-8 rounded-lg text-center" key={i}>
                        <h4 className="font-medium text-lg text-app-black">{e.desc}</h4>
                    </div>
                )}
            </div>
        </section>
    );
}

export function SectionC() {
    const text = {
        title: "הכשרה מקצועית",
    }

    const flexData = [
        {
            desc: "תואר ראשון ושני בחינוך עם התמחות בפן טיפולי ובצרכים מיוחדים מורכבים.",
        },
        {
            desc: "לימודי תעודה בטיפול התנהגותי קוגניטיבי ותרפיית קבלה ומחויבות במכון פסגות בחסות האוניברסיטה הפתוחה.",
        },
        {
            desc: "מאז 2009 אני מתרגל מדיטציית ויפאסנה יומית ומיינדפולנס. התרגול הפך לדבר שבשגרה בחיי.",
        },
    ]

    return (
        <section className="space-y-6">
            <h4 className="text-3xl font-bold text-app-brown text-center">{text.title}</h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8 justify-center items-center text-center">
                {flexData.map((e, i) =>
                    <div className="sapce-y-2 bg-app-light-pink text-app-black p-6 rounded-lg" key={i}>
                        <h4 className="font-medium text-app-black">{e.desc}</h4>
                    </div>
                )}
            </div>
        </section>
    );
}

export default function Page() {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-16 space-y-12 lg:space-y-20">
            <AboutSection />
            <SectionB />
            <SectionC />
        </div>
    )
}
