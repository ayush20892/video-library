import "./header.css"
import { Link, useNavigate } from "react-router-dom"
import { FiUser } from "react-icons/fi"
import { BiSearchAlt2, BiLeftArrowAlt } from "react-icons/bi"

export function UtilHeader({header}) {
  const navigate = useNavigate()
  return(
    <nav>
      <div className="nav-brand">
        <BiLeftArrowAlt 
          onClick={() => navigate(-1)} 
          className="left-arrow"/>
        <p>{header}</p>
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