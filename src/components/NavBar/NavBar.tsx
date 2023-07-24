import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./NavBar.css";
import NavButton from "./NavButton";
import DropdownItems from "../Dropdown/DropdownItems";

function NavBar() {
  const [click, setClick] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({
    contact: false,
    jeugdschaak: false,
    toernooien: false,
    teamcompetitie: false,
    links: false,
    // Add more dropdown states as needed for other nav elements
  });
  const changeClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = (navItem: string) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [navItem]: true,
    }));
  };

  const onMouseLeave = (navItem: string) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [navItem]: false,
    }));
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <i className="fas fa-home" />
        {/* <img src="src/assets/images/kmsk.jpg"></img> */}
      </Link>
      <div className="menu-icon" onClick={changeClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {/* Navbar */}
      <ul className={click ? "nav-side-menu start" : "nav-side-menu"}>
        <li
          className="nav-items"
          onMouseEnter={() => onMouseEnter("contact")}
          onMouseLeave={() => onMouseLeave("contact")}
        >
          <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
            Contact
            <i className="fas fa-caret-down" />
            {dropdownStates.contact && (
              <Dropdown dropdownItems={DropdownItems.Contact} />
            )}
          </Link>
        </li>
        <li
          className="nav-items"
          onMouseEnter={() => onMouseEnter("jeugdschaak")}
          onMouseLeave={() => onMouseLeave("jeugdschaak")}
        >
          <Link to="/bestuur" className="nav-links" onClick={closeMobileMenu}>
            Jeugd
            <i className="fas fa-caret-down" />
            {dropdownStates.jeugdschaak && (
              <Dropdown dropdownItems={DropdownItems.Jeugdschaak} />
            )}
          </Link>
        </li>

        <li
          className="nav-items"
          onMouseEnter={() => onMouseEnter("toernooien")}
          onMouseLeave={() => onMouseLeave("toernooien")}
        >
          <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
            Toernooien
            <i className="fas fa-caret-down" />
            {dropdownStates.toernooien && (
              <Dropdown dropdownItems={DropdownItems.Toernooien} />
            )}
          </Link>
        </li>
        <li
          className="nav-items"
          onMouseEnter={() => onMouseEnter("teamcompetitie")}
          onMouseLeave={() => onMouseLeave("teamcompetitie")}
        >
          <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
            Teamcompetitie
            <i className="fas fa-caret-down" />
            {dropdownStates.teamcompetitie && (
              <Dropdown dropdownItems={DropdownItems.Teamcompetitie} />
            )}
          </Link>
        </li>
        <li
          className="nav-items"
          onMouseEnter={() => onMouseEnter("links")}
          onMouseLeave={() => onMouseLeave("links")}
        >
          <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
            Links
            <i className="fas fa-caret-down" />
            {dropdownStates.links && (
              <Dropdown dropdownItems={DropdownItems.Links} />
            )}
          </Link>
        </li>
        <li className="nav-items">
          <Link to="/historiek" className="nav-links" onClick={closeMobileMenu}>
            Historiek
          </Link>
        </li>
      </ul>
      {/* <NavButton /> */}
    </nav>
  );
}

export default NavBar;
