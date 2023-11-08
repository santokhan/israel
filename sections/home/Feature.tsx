import AppButton from "@/components/button/AppButton";
import Image from "next/image";
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
                <hr className="border-t-2 border-app-brown" />
                <div className="flex flex-wrap lg:flex-nowrap gap-y-4">
                    {flexData.map((e, i) =>
                        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2" key={i}>
                            <Link href={e.link} className="text-app-brown hover:text-app-green space-y-3">
                                <Image src={""} alt="" className="w-full h-full aspect-video bg-app-light-green object-cover" />
                                <div className="space-y-1">
                                    <h4 className="text-lg font-medium">{e.title}</h4>
                                    {/* <p className="">{e.desc}</p> */}
                                </div>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div >
    );
}