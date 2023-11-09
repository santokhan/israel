import { SectionA, SectionB, SectionC } from "@/sections/about/About"

export default function Page() {
    return (
        <div className="max-w-screen-xl mx-auto px-4 py-8 lg:py-16 space-y-12 lg:space-y-20">
            <SectionB />
            <SectionC />
        </div>
    )
}
