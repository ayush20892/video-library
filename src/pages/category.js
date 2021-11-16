import { UtilHeader } from "../components/header/utilHeader.js"
import { CategoryCard } from "../components/categoryCard/categoryCard.js";
import { Footer } from "../components/footer/footer.js"
import { useMediaQuery } from 'react-responsive';
import { DesktopHeader } from "../components/header/desktopHeader.js";


export function  Category() {
  const isMobile = useMediaQuery({ query: `(min-width: 500px)` });
  return(
    <div>
      {isMobile ? <DesktopHeader/> : <UtilHeader header="Category" /> }
      <CategoryCard/>
      <Footer/>
    </div>
  );
}