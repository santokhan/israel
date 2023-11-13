import Link from "next/link";

export default function Feature() {
    const title = "אולי יעניין אותך גם"
    const flexData: Array<Record<string, string>> = [
        {
            title: "שמעת פעם על המושג ‘וויסות חושי’?",
            desc: "",
            link: ""
        },
        {
            title: "שמעת פעם על המושג ‘וויסות חושי’?",
            desc: "",
            link: ""
        },
        {
            title: "שמעת פעם על המושג ‘וויסות חושי’?",
            desc: "",
            link: ""
        },
        {
            title: "שמעת פעם על המושג ‘וויסות חושי’?",
            desc: "",
            link: ""
        },
    ]

    return (
        <div className="py-12 lg:py-20">
            <div className="w-full max-w-screen-xl mx-auto px-4 space-y-6">
                <h1 className="text-3xl font-bold text-app-brown">{title}</h1>
                <hr className="border-t border-app-brown" />
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-4">
                    {flexData.map((e, i) =>
                        <Link href={e.link} className="text-app-brown hover:text-app-green space-y-3" key={i}>
                            <div className="">
                                <img src="/assets/images/home/gallary/1.png" alt="" className="w-full h-full aspect-[4/3] bg-app-light-green object-cover" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-lg font-medium">{e.title}</h4>
                                {/* <p className="">{e.desc}</p> */}
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}