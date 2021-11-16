import { UtilHeader } from "../components/header/utilHeader.js"
import { BookmarkCard } from "../components/bookmarkCard/bookmarkCard.js";
import { Footer } from "../components/footer/footer.js"
import { useMediaQuery } from 'react-responsive';
import { DesktopHeader } from "../components/header/desktopHeader.js";


export function  Bookmark() {
  const isMobile = useMediaQuery({ query: `(min-width: 500px)` });

  return(
    <div>
      {isMobile ? <DesktopHeader/> : <UtilHeader header="Bookmarks" /> }
      <BookmarkCard/>
      <Footer/>
    </div>
  );
}