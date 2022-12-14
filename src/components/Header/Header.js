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
    searchOpen & !search ? setSearchOpen(false) : setSearchOpen(true);
  };
  const onBlurSearchIcon = () => {
    if (searchOpen & !search) {
      setSearchOpen(false);
      console.log("asdad");
    }
  };

  // Aplicamos debounce para no llamar a la api mientras escribimos
  const handleSearch = (e) => {
    updateDebounceSearch(e.target.value);
    // setSearch(e.target.value)
  };
  const updateDebounceSearch = debounceSearch((text) => {
    setSearch(text);
  });
  function debounceSearch(cb) {
    let timeout;

    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        cb(...args);
      }, 500);
    };
  }
  ///////////////

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
            onBlur={onBlurSearchIcon}
            autoFocus
          />

          <FontAwesomeIcon
            onClick={handleSearchIcon}
            className="fabIcon search__icon"
            icon={faMagnifyingGlass}
          />
        </div>
        <div>
          <Link>Ni??os</Link>
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
