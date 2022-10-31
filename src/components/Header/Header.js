import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faChevronDown,
  faChevronUp,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

// assets
import "./Header.scss";
import logo from "../../assets/logo.png";

export default function Header() {
  return (
    <div className="header">
      <div className="nav">
        <img className="nav-logo" src={logo} />
        <nav className="nav-desk-nav">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link>Series</Link>
            </li>
            <li>
              <Link>Peliculas</Link>
            </li>
            <li>
              <Link>Populares</Link>
            </li>
            <li>
              <Link>Mi lista</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="user">
        <div className="search-icon">
          <FontAwesomeIcon className="fabIcon" icon={faMagnifyingGlass} />
        </div>
        <div>
          <Link>Niños</Link>
        </div>
        <div>
          <FontAwesomeIcon className="fabIcon" icon={faBell} />
        </div>
        <div className="user-config">
          <FontAwesomeIcon className="fabIcon" icon={faCircleUser} />
          <FontAwesomeIcon className="fabIcon" icon={faChevronDown} />
        </div>
      </div>
    </div>
  );
}
