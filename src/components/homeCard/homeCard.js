import "./homeCard.css"
import { data } from "../../data.js"
import { BsBookmark } from "react-icons/bs"
import { useNavigate } from "react-router"
import { useEffect, useState } from "react"
import axios from "axios"
import * as convert from "xml-js"
var XMLParser = require('react-xml-parser');

export function HomeCard() {
  const navigate = useNavigate()
  const [data1, setData] = useState([])
  console.log(data1)
  useEffect(() => {
    (async () => {
      let feed = await axios.get('https://rss.app/feeds/NPN0UWLI42cvKEEo.xml');
      var xml = new XMLParser().parseFromString(feed.data);    // Assume xmlText contains the example XML
      console.log(xml.children[0].children);

      let res = convert.xml2json(feed.data, {compact: false, spaces: 4})

      console.log(JSON.parse(res).elements[0].elements[0].elements[8]);

      setData(xml.children[0].children)


    })()
  },[])
  return(
    <main>
      {data.map(item => {
        return(
        <div className="video-item-box">
          <div onClick={() => navigate(`/video/${item.videoId}`)} className="img-box">
            <img src={item.img} alt="thumbnail" />
            <span>{item.duration}</span>
          </div>
          <div className="video-details">
            <div className="video-title">
              {data1}
              <h4>{item.name}</h4>
              <p>{item.creator} &#9734; {item.views}</p>
            </div>
            <BsBookmark className="bookmark" />
          </div>
        </div>
      )})}
    </main>
  );
}