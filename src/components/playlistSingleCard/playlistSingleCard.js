import "./playlistSingleCard.css"
import { data } from "../../data.js"
import { BsThreeDotsVertical } from "react-icons/bs"

export function PlaylistSingleCard() {
  return(
    <main>
      <h4 className="playlistSingle-no">3 Videos</h4>
      {data.map(item => {
        return(
        <div className="playlistSingle-box">
          <div className="img-box">
            <img src={item.img} alt="thumbnail" />
            <span>{item.duration}</span>
          </div>
          <div className="video-details">
            <h4>{item.name}</h4>
            <small>{item.creator} &#9734; {item.views}</small>
          </div>
          <BsThreeDotsVertical className="three-dots"/>
        </div>
        );
      })}
    </main>
  );
}