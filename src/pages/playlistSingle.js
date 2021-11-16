import { UtilHeader } from "../components/header/utilHeader.js"
import { PlaylistSingleCard } from "../components/playlistSingleCard/playlistSingleCard.js";
import { Footer } from "../components/footer/footer.js"
import { useMediaQuery } from 'react-responsive';
import { DesktopHeader } from "../components/header/desktopHeader.js";


export function  PlaylistSingle() {
  const isMobile = useMediaQuery({ query: `(min-width: 500px)` });
  return(
    <div>
      {isMobile ? <DesktopHeader/> : <UtilHeader header="Playlist Name" /> }
      <PlaylistSingleCard/>
      <Footer/>
    </div>
  );
}