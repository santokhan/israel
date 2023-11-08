import Header from '@/components/header/Header'
import HomeA from '@/sections/home/A'
import Accordion from '@/sections/home/Accordion'
import HomeB from '@/sections/home/B'
import GreenCard from '@/sections/home/C'
import Feature from '@/sections/home/Feature'
import Gallary from '@/sections/home/Gallary'
import Portfolio from '@/sections/home/Portfolio'
import Slider from '@/sections/home/Slider'

export default function Home() {
    return (
        <>
            <Header />
            <HomeA />
            <HomeB />
            <GreenCard />
            <Slider />
            <Portfolio />
            <Feature />
            <Accordion />
            <Gallary />
        </>
    )
}
