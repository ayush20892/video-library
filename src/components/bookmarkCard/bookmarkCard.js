import "./bookmarkCard.css"
import { data } from "../../data.js"
import { BsThreeDotsVertical } from "react-icons/bs"

export function BookmarkCard() {
  return(
    <main>
      <h4 className="bookmark-no">3 Videos</h4>
      {data.map(item => {
        return(
        <div className="bookmark-box">
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