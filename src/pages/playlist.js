import { UtilHeader } from "../components/header/utilHeader.js"
import { PlaylistCard } from "../components/playlistCard/playlistCard.js";
import { Footer } from "../components/footer/footer.js"
import { useMediaQuery } from 'react-responsive';
import { DesktopHeader } from "../components/header/desktopHeader.js";


export function  Playlist() {
  const isMobile = useMediaQuery({ query: `(min-width: 500px)` });
  return(
    <div>
      {isMobile ? <DesktopHeader/> : <UtilHeader header="Playlists" /> }
      <PlaylistCard/>
      <Footer/>
    </div>
  );
}