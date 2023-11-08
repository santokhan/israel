export const iconHome = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" viewBox="0 0 72 72">
        <g id="Group_185" data-name="Group 185" transform="translate(-85 -1)">
            <path id="Path_520" data-name="Path 520" d="M138.108,26.571A18,18,0,0,1,141,36.35a17.809,17.809,0,0,1-3.825,11.087L126.328,36.483Zm.347-2.906L123.38,36.35l13.876,14.01a19.965,19.965,0,0,0,1.2-26.695" fill="#6c3321" />
            <path id="Path_521" data-name="Path 521" d="M118.8,17.1V37.012a2,2,0,0,0,.579,1.408l13.965,14.1A19.024,19.024,0,0,1,121.045,57c-8.713,0-18.656-6.2-19.919-17.7a19.989,19.989,0,0,1,5-15.721A19.783,19.783,0,0,1,118.8,17.1m2-2.1a22,22,0,0,0,.245,44,20.976,20.976,0,0,0,15.172-6.42L120.8,37.012Z" fill="#6c3321" />
            <path id="Path_522" data-name="Path 522" d="M124.577,17.123a16.266,16.266,0,0,1,9.208,4.363l-9.208,7.673Zm-2-2.123V33.43l14.111-11.76A18.279,18.279,0,0,0,122.577,15" fill="#6c3321" />
            <path id="Path_523" data-name="Path 523" d="M121,73a36,36,0,1,1,36-36,36.04,36.04,0,0,1-36,36m0-70a34,34,0,1,0,34,34A34.038,34.038,0,0,0,121,3" fill="#6c3321" />
        </g>
    </svg>
)
export const iconChart = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" viewBox="0 0 72 72">
        <g id="Group_185" data-name="Group 185" transform="translate(-85 -1)">
            <path id="Path_520" data-name="Path 520" d="M138.108,26.571A18,18,0,0,1,141,36.35a17.809,17.809,0,0,1-3.825,11.087L126.328,36.483Zm.347-2.906L123.38,36.35l13.876,14.01a19.965,19.965,0,0,0,1.2-26.695" fill="#6c3321" />
            <path id="Path_521" data-name="Path 521" d="M118.8,17.1V37.012a2,2,0,0,0,.579,1.408l13.965,14.1A19.024,19.024,0,0,1,121.045,57c-8.713,0-18.656-6.2-19.919-17.7a19.989,19.989,0,0,1,5-15.721A19.783,19.783,0,0,1,118.8,17.1m2-2.1a22,22,0,0,0,.245,44,20.976,20.976,0,0,0,15.172-6.42L120.8,37.012Z" fill="#6c3321" />
            <path id="Path_522" data-name="Path 522" d="M124.577,17.123a16.266,16.266,0,0,1,9.208,4.363l-9.208,7.673Zm-2-2.123V33.43l14.111-11.76A18.279,18.279,0,0,0,122.577,15" fill="#6c3321" />
            <path id="Path_523" data-name="Path 523" d="M121,73a36,36,0,1,1,36-36,36.04,36.04,0,0,1-36,36m0-70a34,34,0,1,0,34,34A34.038,34.038,0,0,0,121,3" fill="#6c3321" />
        </g>
    </svg>
)
export const iconStar = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" viewBox="0 0 72 72">
        <g id="Group_186" data-name="Group 186" transform="translate(-1421 -1785)">
            <path id="Path_527" data-name="Path 527" d="M206,19.532l5,10.176a2,2,0,0,0,1.506,1.1l11.2,1.634L215.6,40.375a2,2,0,0,0-.572,1.766l1.913,11.2-10.009-5.281a2,2,0,0,0-1.866,0l-10.009,5.281,1.913-11.2a2,2,0,0,0-.572-1.766l-8.112-7.936,11.2-1.634a2,2,0,0,0,1.506-1.1ZM206,15l-6.8,13.826L184,31.043,195,41.8,192.4,57,206,49.826,219.6,57,217,41.8l11-10.761-15.2-2.217Z" transform="translate(1251 1784)" fill="#6c3321" />
            <path id="Path_528" data-name="Path 528" d="M206,73a36,36,0,1,1,36-36,36.04,36.04,0,0,1-36,36m0-70a34,34,0,1,0,34,34A34.038,34.038,0,0,0,206,3" transform="translate(1251 1784)" fill="#6c3321" />
        </g>
    </svg>
)

export default function HomeB() {
    const flexData = [
        {
            title: "מקצועיות",
            desc: "ניסיון והכשרה מקצועית רחבה שעוברת אליך בצורה נגישה, במילים פשוטות ומחוברות אליך ולצרכים שלך.",
            icon: iconHome
        },
        {
            title: "כלים פרקטיים",
            desc: "כדי שתדעי איך לפעול ולצאת ממצבים מלאי סטרס וחרדה ביומיום גם אם לא השלמת את כל המסע שלך עדיין.",
            icon: iconChart
        },
        {
            title: "מרחב בטוח",
            desc: "כל מה שאת מביאה איתך מקבל מקום, אין פה ביקורת או אשמה, לומדות להסתכל לבושה בעיניים ולחבק אותה. ללא שיפוטיות ובקבלה מלאה.",
            icon: iconHome
        },
    ]

    return (
        <section className="py-12 lg:py-20">
            <div className="w-full max-w-screen-xl mx-auto px-4">
                <div className="flex flex-wrap lg:flex-nowrap gap-8 justify-center">
                    {flexData.map((e, i) =>
                        <figure className="md:basis-1/2 lg:basis-1/3 grid place-items-center gap-4 text-center bg-app-pink text-app-black p-8 rounded-lg" key={i}>
                            <e.icon></e.icon>
                            <article className="space-y-1">
                                <h4 className="text-lg font-medium text-app-brown">{e.title}</h4>
                                <p className="text-app-brown">{e.desc}</p>
                            </article>
                        </figure>
                    )}
                </div>
            </div>
        </section>
    );
}