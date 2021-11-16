import { UtilHeader } from "../components/header/utilHeader.js"
import { HistoryCard } from "../components/historyCard/historyCard.js"
import { Footer } from "../components/footer/footer.js"
import { useMediaQuery } from 'react-responsive';
import { DesktopHeader } from "../components/header/desktopHeader.js";


export function  History() {
  const isMobile = useMediaQuery({ query: `(min-width: 500px)` });
  return(
    <div>
      {isMobile ? <DesktopHeader/> : <UtilHeader header="History" /> }
      <HistoryCard/>
      <Footer/>
    </div>
  );
}