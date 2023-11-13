import Button from '@/components/button/Button'

export function Books() {
    const title = "מדריכים"
    const text = { button: "להורדה" }
    const flexData: Array<string> = ["", "", ""]

    return (
        <div className="py-12 lg:py-20">
            <div className="w-full max-w-screen-xl mx-auto px-4 space-y-6">
                <h1 className="text-3xl font-bold text-app-black">{title}</h1>
                <hr className="border-t border-app-brown" />
                <div className="flex flex-wrap justify-evenly gap-x-8 gap-y-16">
                    {flexData.map((e, i) =>
                        <div className="w-full sm:max-w-xs hover:text-app-green grid place-items-center gap-8" key={i}>
                            <img src="/assets/images/shop/1.png" alt="" className="w-full h-full aspect-square bg-app-light-green object-cover" />
                            <Button.Green>{text.button}</Button.Green>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}