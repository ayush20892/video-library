import "./footer.css"
import { Link } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai"
import { BsInboxes, BsBookmark } from "react-icons/bs"
import { RiPlayListAddFill } from "react-icons/ri"

export function Footer () {
  return(
    <footer>
      <div className="footer-icons">

        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <AiOutlineHome
            className="icon"
          />
          <p>Home</p>
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <BsInboxes
            className="icon"
          />
          <p>Category</p>
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <BsBookmark
            className="icon"
          />
          <p>Bookmark</p>
        </Link>

        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <RiPlayListAddFill
            className="icon"
          />
          <p>Playlist</p>
        </Link>


      </div>
    </footer>
  )
}