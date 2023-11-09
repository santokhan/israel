import BreadCrumb from '@/components/breadcrumb/Breadcrumb'
import { SectionA, SectionB, SectionC } from '@/sections/therapy/Therapy'

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


