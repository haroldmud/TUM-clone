import Header from "../components/layout/Header"
import Hero from "../components/sections/HeroSection"
import News from "../components/sections/News"
import Discover from "../components/sections/Discover"
import Organization from "../components/sections/Organization"

export default function Home() {
  return (
    <div className="">
      <Header/>
      <Hero/>
      <News/>
      <Discover/>
      <Organization/>
    </div>
  )
}
