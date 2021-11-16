import "./playlistCard.css"
import { playlistData } from "../../playlistData.js"
import { BsThreeDotsVertical } from "react-icons/bs"
import { AiOutlinePlus, AiOutlineLike } from "react-icons/ai"

export function PlaylistCard() {
  return(
    <main>
      <h4 className="playlist-no">
        3 Playlists
      </h4>
      <button className="btn-new-playlist"><AiOutlinePlus className="plus"/> <span>NEW PLAYLIST</span></button>
      <div className="playlist-box">
        <AiOutlineLike class="like" />
        <div className="playlist-details">
          <h4>Liked Videos</h4>
          <p>0 Videos</p>
        </div>
      </div>
      {playlistData.map(item => {
        return(
          <div className="playlist-box">
            <img src={item.img} alt="playlist-img" />
            <div className="playlist-details">
              <h4>{item.name}</h4>
              <p>{item.noOfVideos} Videos</p>
            </div>
            <BsThreeDotsVertical className="three-dots"/>
          </div>
        );
      })}
    </main>
  );
}