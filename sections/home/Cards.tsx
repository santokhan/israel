import Button from "@/components/button/Button"

export default function Cards() {
    const cardList = [
        {
            title: "בואי נדבר :)",
            desc: "יש לך שאלות? לא בטוחה מה מתאים לך? רוצה להתייעץ? תכתבי לי הודעה ונדבר.",
            button: "הצטרפי לקבוצה",
        },
        {
            title: "הצטרפי לקבוצת הוואטסאפ של",
            desc: "קבוצת וואטסאפ שקטה שבה אני מעלה פעם בשבוע הצעה לתרגול בנושא המיינד ורגשות, אסטרטגיות הרגעה עצמית והטבות שונות.",
            button: "הצטרפי לקבוצה",
        },
    ]

    return (
        <section className="py-12 lg:py-16">
            <div className="w-full max-w-screen-lg mx-auto p-4">
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-app-light-pink">
                        <div className="p-6 space-y-4">
                            <h4 className="text-xl font-bold text-app-black">{cardList[0].title}</h4>
                            <p className="text-app-black">{cardList[0].desc}</p>
                            <Button.Brown>{cardList[0].button}</Button.Brown>
                        </div>
                    </div>
                    <div className="bg-app-light-green">
                        <div className="p-6 space-y-4">
                            <div className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 34 34">
                                    <path id="icon_whatsapp" data-name="icon whatsapp" d="M19,2A16.929,16.929,0,0,0,4.206,27.285L2.027,35.062a.739.739,0,0,0,.889.917l8.109-2.01A16.983,16.983,0,1,0,19,2Zm0,1.478a15.522,15.522,0,1,1-7.567,29.073.739.739,0,0,0-.538-.072l-7.1,1.76,1.9-6.794a.739.739,0,0,0-.074-.576A15.518,15.518,0,0,1,19,3.478ZM12.823,10.13a2.351,2.351,0,0,0-1.706.775A5.757,5.757,0,0,0,9.391,15a8.716,8.716,0,0,0,1.932,4.9h0c-.02-.026.264.386.644.879a23.408,23.408,0,0,0,1.576,1.843,17.116,17.116,0,0,0,5.533,4.018,26.34,26.34,0,0,0,2.557.933,6.813,6.813,0,0,0,3.079.2,5.2,5.2,0,0,0,1.937-.8,3.592,3.592,0,0,0,1.6-1.729,6.1,6.1,0,0,0,.346-1.522,3.489,3.489,0,0,0,.007-.582,1.013,1.013,0,0,0-.163-.58c-.344-.565-.734-.58-1.14-.781-.226-.112-.869-.426-1.514-.733s-1.2-.579-1.546-.7a1.742,1.742,0,0,0-.865-.147,1.471,1.471,0,0,0-.98.645c-.208.309-1.048,1.3-1.3,1.591,0,0,.019.008-.082-.042-.316-.157-.7-.29-1.276-.592a10.557,10.557,0,0,1-2.073-1.439h0a12.206,12.206,0,0,1-2.242-2.75c.017-.021,0,0,.035-.032h0c.264-.26.5-.57.694-.8a3.685,3.685,0,0,0,.537-.872,1.634,1.634,0,0,0-.036-1.418h0c.011.021-.083-.186-.185-.426s-.231-.551-.37-.883c-.277-.664-.586-1.409-.769-1.845h0a1.923,1.923,0,0,0-.892-1.062,1.429,1.429,0,0,0-.735-.128h0C13.42,10.134,13.12,10.13,12.823,10.13Zm0,1.478c.285,0,.566,0,.8.014s.227.013.18-.009.017-.029.154.3c.18.427.49,1.175.768,1.841.139.333.269.646.372.891s.16.382.225.512h0c.064.126.058.045.036.09a2.154,2.154,0,0,1-.335.567c-.24.277-.485.585-.615.713a1.59,1.59,0,0,0-.446.625A1.43,1.43,0,0,0,14.1,18.31a13.525,13.525,0,0,0,2.575,3.164,12.085,12.085,0,0,0,2.36,1.639c.656.346,1.191.549,1.311.608a1.661,1.661,0,0,0,.956.206,1.44,1.44,0,0,0,.871-.486h0c.264-.3,1.047-1.194,1.423-1.745.016.006.011,0,.136.046h0c.057.02.772.34,1.409.644s1.284.619,1.494.723c.3.15.447.248.484.248a1.738,1.738,0,0,1,0,.243,4.7,4.7,0,0,1-.264,1.148,2.787,2.787,0,0,1-.995.983,4.6,4.6,0,0,1-1.364.586,5.3,5.3,0,0,1-2.419-.144,24.7,24.7,0,0,1-2.419-.882,15.8,15.8,0,0,1-5.041-3.675,21.964,21.964,0,0,1-1.477-1.728c-.354-.461-.509-.7-.638-.871h0A7.985,7.985,0,0,1,10.87,15,3.9,3.9,0,0,1,12.2,11.912.876.876,0,0,1,12.823,11.609Z" transform="translate(-2 -2)" fill="#226b6d" />
                                </svg>
                                <h4 className="text-xl font-bold text-app-black">{cardList[1].title}</h4>
                            </div>
                            <p className="text-app-black">{cardList[1].desc}</p>
                            <Button.Green>{cardList[1].button}</Button.Green>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}