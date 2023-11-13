import Link from "next/link";

export function Post() {
    const flexData: Array<Record<string, string | any>> = [
        {
            title: "ארוחה משפחתית. איך עושים את זה?",
            desc: "",
            link: "/article",
        },
        {
            title: "ארוחה משפחתית. איך עושים את זה?",
            desc: "",
            link: "/article",
        },
        {
            title: "ארוחה משפחתית. איך עושים את זה?",
            desc: "",
            link: "/article",
        },
        {
            title: "ארוחה משפחתית. איך עושים את זה?",
            desc: "",
            link: "/article",
        },
        {
            title: "ארוחה משפחתית. איך עושים את זה?",
            desc: "",
            link: "/article",
        },
        {
            title: "ארוחה משפחתית. איך עושים את זה?",
            desc: "",
            link: "/article",
        },
        {
            title: "ארוחה משפחתית. איך עושים את זה?",
            desc: "",
            link: "/article",
        },
        {
            title: "ארוחה משפחתית. איך עושים את זה?",
            desc: "",
            link: "/article",
        },
        {
            title: "ארוחה משפחתית. איך עושים את זה?",
            desc: "",
            link: "/article",
        },
    ]

    return (
        <div className="py-12 lg:py-20">
            <div className="w-full max-w-screen-xl mx-auto px-4 space-y-6">
                <div className="flex flex-wrap gap-x-8 gap-y-8 lg:gap-y-12 justify-evenly">
                    {flexData.map((e, i) =>
                        <Link href={e.link} className="max-w-xs text-app-black hover:text-app-green space-y-3" key={i}>
                            <div className="">
                                <img src="/assets/images/blog/1.png" alt="" className="w-full h-full aspect-[4/3] bg-app-light-green object-cover" />
                            </div>
                            <div className="space-y-1">
                                <h4 className="text-2xl font-medium">{e.title}</h4>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}
