import { useState, useEffect, createContext, useContext } from "react";

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
//constants
// search service
import { getSearchByName } from "../../utils/getMovies";

import { ResultsContext } from "../../App";
export default function Header({ results, setResults, setContexto }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [resultados, setResultados] = useContext(ResultsContext);

  useEffect(() => {
    (async () => {
      const data = await getSearchByName(search);
      setResultados(data.results);
    })();
  }, [search]);

  const handleSearchIcon = () => {
    searchOpen & !search
      ? setSearchOpen(false)
      : searchOpen & (search.length > 0)
      ? console.log("search")
      : setSearchOpen(true);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const classSearch = searchOpen ? "opened" : "closed";
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
        <div className="search">
          <input
            type="text"
            className={`search__input ${classSearch}`}
            onChange={handleSearch}
            onBlur={handleSearchIcon}
            autoFocus
          />

          <FontAwesomeIcon
            onClick={handleSearchIcon}
            className="fabIcon search__icon"
            icon={faMagnifyingGlass}
          />
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
