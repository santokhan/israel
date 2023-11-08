export default function HomeA() {
    const flexData = [
        {
            title: "למה טיפול בעצם?",
            desc: "מטרת הטיפול היא לקחת אותך את הצעד קדימה הזה במקום שבו את עומדת כרגע. להשתחרר מהתנהגויות מעכבות ולשפר את איכות החיים שלך באמצעות העלאת המודעות וחקירה עצמית."
        },
        {
            title: "זמן שהוא רק שלך",
            desc: "להציב זמן ביומן שמוקדש כולו עבורך. זמן שבו עושות סדר במחשבות, לומדות אילו רגשות קיימים בך בעוצמות גבוהות ומבינות יחד מה את רוצה מעצמך ומהחיים שלך."
        },
        {
            title: "לראות אותך בעיניים טובות",
            desc: "כשאת מספרת את הסיפור שלך החוצה את מספרת אותו גם לעצמך. את מסדרת אותו, מבינה מה נכון לך ומה לא היה מדויק לך בעבר ומכך לומדת. בשביל לעשות את זה מישהו צריך להחזיק לך את המרחב הבטוח שלו את זקוקה. בכבוד, בחמלה וללא שיפוטיות."
        },
        {
            title: "למידה פרקטית מבוססת מחקר וניסיון",
            desc: "התבוננות בחוויות החיים שלך, בסיפור שלך מנקודת מבט טיפולית עוזרת לך לדייק את עצמך וללמוד לעשות בחירות מקום מקום של רצון ומחשבת תחילה ולא ממקום של הישרדות וחוסר אונים."
        },
        {
            title: "להיות שמחה באמת",
            desc: "כשאת בוחרת להסתכל על הפחד בעיניים ולהפסיק לנסות להתכחש אליו את בעצם בוחרת להסתכל על עצמך ולעזור לעצמך. לקבל את מה שקורה, לראות את כל הכוחות ואפילו לחבק את עצמך על המאמץ."
        },
    ]

    return (
        <section className="py-12 lg:py-20">
            <div className={["w-full max-w-screen-xl mx-auto px-4 grid lg:grid-cols-3", "gap-4 sm:gap-8 lg:gap-16"].join(" ")}>
                <div className="">
                    {flexData.slice(0, 1).map((e, i) =>
                        <div className="px-4 py-2 space-y-2" key={i}>
                            <h4 className="text-2xl font-semibold text-app-brown">{e.title}</h4>
                            <p className="text-xl text-app-brown">{e.desc}</p>
                        </div>
                    )}
                </div>
                <div className="col-span-2 space-y-12">
                    <div className={["grid md:grid-cols-2", "gap-4 sm:gap-8 lg:gap-16"].join(" ")}>
                        {flexData.slice(0, 4).map((e, i) =>
                            <div className="basis-1/2 py-2 space-y-2" key={i}>
                                <h4 className="text-xl font-semibold text-app-brown">{e.title}</h4>
                                <p className="text-lg text-app-black">{e.desc}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}