import "./header.css"
import icon64 from "../../icon/Utility-UI-64.png"
import { Link } from "react-router-dom"
import { FiUser } from "react-icons/fi"
import { BiSearchAlt2 } from "react-icons/bi"

export function Header() {
  return(
    <nav>
      <div className="nav-brand">
        <img src={icon64} alt="brand icon" />
        <p>UnVisual</p>
      </div>

      <div className="side-icon">
        <Link to="/login" style={{textDecoration: "none", color: "black"}}>
          <BiSearchAlt2 className="search"/>
        </Link>

        <Link to="/login" style={{textDecoration: "none", color: "black"}}>
          <FiUser className="user"/>
        </Link>
      </div>
    </nav>
  )
}