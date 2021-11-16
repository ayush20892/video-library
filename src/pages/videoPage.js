import { VideoPageCard } from "../components/videoPageCard/videoPageCard.js"
import { UtilHeader } from "../components/header/utilHeader.js"
import { Footer } from "../components/footer/footer.js"
import { useMediaQuery } from 'react-responsive';
import { DesktopHeader } from "../components/header/desktopHeader.js";
import { data } from "../data.js"
import { useParams } from "react-router";



export function VideoPages() {
  const isMobile = useMediaQuery({ query: `(min-width: 500px)` });
  const { videoId } = useParams();
  const video = data.find(item => item.videoId === videoId) 
  console.log(videoId, video)
  return(
    <main>
      {isMobile ? <DesktopHeader/> : <UtilHeader/> }
      <VideoPageCard video={video}/>
      <Footer/>
    </main>
  );
}