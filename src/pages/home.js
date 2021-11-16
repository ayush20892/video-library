import { Header } from "../components/header/header.js"
import { HomeCard } from "../components/homeCard/homeCard.js"
import { HomeCardDesktop } from "../components/homeCard/homeCardDesktop.js"
import { Footer } from "../components/footer/footer.js"
import { useMediaQuery } from 'react-responsive';


export function Home() {
  const isMobile = useMediaQuery({ query: `(min-width: 500px)` });
  return(
    <div>
      <Header/>
      {isMobile ? <HomeCardDesktop/> : <HomeCard/> }
      <Footer/>
    </div>
  )
}