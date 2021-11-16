import "./videoPageCard.css"
import YouTube from 'react-youtube';
import { AiOutlineLike } from "react-icons/ai"
import { BsBookmark } from "react-icons/bs"
import { RiPlayListAddLine } from "react-icons/ri"
import { data } from "../../data.js"

export function VideoPageCard({video}) {
  const opts={
    height:"300",
    width:"100%",
    playerVars:{
        autoplay:1
    }
  }
  console.log(video)
  return(
    <div className="videoPage-box">
      <YouTube videoId={video.videoId} opts={opts}/>
      <div className="videoPage-details">
        <h3>{video.name}</h3>
        <p>{video.creator}</p>
        <small>{video.views}</small>
      </div>
      <div className="video-icons">
        <AiOutlineLike className="icon"/>
        <BsBookmark className="icon"/>
        <RiPlayListAddLine className="icon"/>
      </div>
      <hr />
      <div className="videoPage-note-box">
        <input placeholder="Add a note"/>
        {video.notes.slice(0).reverse().map(note => {
          return(
            <li>{note}</li>
          );
        })}
      </div>
    </div>
  );
}