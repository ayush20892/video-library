import "./historyCard.css"
import { data } from "../../data.js"
import { BsThreeDotsVertical } from "react-icons/bs"

export function HistoryCard() {
  return(
    <main>
      <div className="history-header">
        <h4 className="history-no">3 Videos</h4>
        <p className="clear-history">CLEAR WATCH HISTORY</p>
      </div>
      {data.map(item => {
        return(
        <div className="history-box">
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