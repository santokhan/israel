import Header from '@/components/header/Header'
import HomeA from '@/sections/home/A'
import Accordion from '@/sections/home/Accordion'
import HomeB from '@/sections/home/B'
import GreenCard from '@/sections/home/C'
import Feature from '@/sections/home/Feature'
import Gallary from '@/sections/home/Gallary'
import Portfolio from '@/sections/home/Portfolio'
import Slider from '@/sections/home/Slider'
import Cards from '@/sections/home/Cards'

export default function Home() {
    return (
        <>
            <Header />
            <HomeA />
            <div className="max-w-screen-xl mx-auto px-4">
                <hr className="border-t border-app-brown" />
            </div>
            <HomeB />
            <GreenCard />
            <Slider />
            <Portfolio />
            <Feature />
            <Accordion />
            <Cards />
            <Gallary />
        </>
    )
}
