import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./NavBar.css";
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
      <a href="/home" className="logo">
        {/* <i className="fas fa-home" /> */}
        <img src="src/assets/images/kmsk.jpg" className="image-logo"></img>
      </a>

      {/* Navbar when small window */}
      <div className="menu-icon" onClick={changeClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {/* Navbar */}
      <ul className={click ? "nav-side-menu start" : "nav-side-menu"}>
        <li className="nav-items">
          <Link to="/home" className="nav-links">
            Home
          </Link>
        </li>
        <li
          className="nav-items"
          onMouseOver={() => onMouseEnter("contact")}
          onMouseOut={() => onMouseLeave("contact")}
        >
          <Link to="/bestuur" className="nav-links" onClick={closeMobileMenu}>
            Contact
            <i className="fas fa-caret-down" />
            {dropdownStates.contact && (
              <Dropdown dropdownItems={DropdownItems.Contact} />
            )}
          </Link>
        </li>
        <li
          className="nav-items"
          onMouseOver={() => onMouseEnter("jeugdschaak")}
          onMouseOut={() => onMouseLeave("jeugdschaak")}
        >
          <Link to="/jeugd" className="nav-links" onClick={closeMobileMenu}>
            Jeugd
            <i className="fas fa-caret-down" />
            {dropdownStates.jeugdschaak && (
              <Dropdown dropdownItems={DropdownItems.Jeugdschaak} />
            )}
          </Link>
        </li>

        <li
          className="nav-items"
          onMouseOver={() => onMouseEnter("toernooien")}
          onMouseOut={() => onMouseLeave("toernooien")}
        >
          <Link
            to="/toernooien"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Toernooien
            <i className="fas fa-caret-down" />
            {dropdownStates.toernooien && (
              <Dropdown dropdownItems={DropdownItems.Toernooien} />
            )}
          </Link>
        </li>
        <li
          className="nav-items"
          onMouseOver={() => onMouseEnter("teamcompetitie")}
          onMouseOut={() => onMouseLeave("teamcompetitie")}
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
          onMouseOver={() => onMouseEnter("links")}
          onMouseOut={() => onMouseLeave("links")}
        >
          <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
            Links
            <i className="fas fa-caret-down" />
            {dropdownStates.links && (
              <Dropdown dropdownItems={DropdownItems.Links} />
            )}
          </Link>
        </li>
      </ul>
      <a
        href="https://www.facebook.com/groups/742874852493936"
        target="_blank"
        className="facebook nav-links"
      >
        <img src="src/assets/images/facebook.png" width="30px"></img>
      </a>
    </nav>
  );
}

export default NavBar;
