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
        <img src="/assets/images/kmsk.jpg" className="image-logo"></img>
      </a>

      {/* Navbar when small window */}
      <div className="menu-icon" onClick={changeClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {/* Navbar */}
      <ul className={click ? "nav-side-menu start" : "nav-side-menu"}>
        <li className="nav-items">
          <Link to="/home" className="nav-links nav-links-mobile">
            Home
          </Link>
        </li>
        <li
          className="nav-items"
          onMouseOver={() => onMouseEnter("contact")}
          onMouseOut={() => onMouseLeave("contact")}
        >
          <div className="nav-links-mobile" onClick={closeMobileMenu}>
            <Link to="/Bestuur" className="nav-links">
              Contact
              <i className="fas fa-caret-down" />
            </Link>
            {dropdownStates.contact && (
              <Dropdown dropdownItems={DropdownItems.Contact} />
            )}
          </div>
        </li>
        <li
          className="nav-items"
          onMouseOver={() => onMouseEnter("jeugdschaak")}
          onMouseOut={() => onMouseLeave("jeugdschaak")}
        >
          <div className="nav-links-mobile" onClick={closeMobileMenu}>
            <Link to="/Jeugd" className="nav-links">
              Jeugd
              <i className="fas fa-caret-down" />
            </Link>
            {dropdownStates.jeugdschaak && (
              <Dropdown dropdownItems={DropdownItems.Jeugdschaak} />
            )}
          </div>
        </li>

        <li
          className="nav-items"
          onMouseOver={() => onMouseEnter("toernooien")}
          onMouseOut={() => onMouseLeave("toernooien")}
        >
          <div className="nav-links-mobile" onClick={closeMobileMenu}>
            <Link to="/toernooien" className="nav-links">
              Toernooien
              <i className="fas fa-caret-down" />
            </Link>
            {dropdownStates.toernooien && (
              <Dropdown dropdownItems={DropdownItems.Toernooien} />
            )}
          </div>
        </li>
        <li
          className="nav-items"
          onMouseOver={() => onMouseEnter("teamcompetitie")}
          onMouseOut={() => onMouseLeave("teamcompetitie")}
        >
          <div className="nav-links-mobile" onClick={closeMobileMenu}>
            <Link to="/teamcompetitie" className="nav-links">
              Teamcompetitie
              <i className="fas fa-caret-down" />
            </Link>
            {dropdownStates.teamcompetitie && (
              <Dropdown dropdownItems={DropdownItems.Teamcompetitie} />
            )}
          </div>
        </li>
        <li
          className="nav-items"
          onMouseOver={() => onMouseEnter("links")}
          onMouseOut={() => onMouseLeave("links")}
        >
          <div className="nav-links-mobile" onClick={closeMobileMenu}>
            <Link to="/links" className="nav-links">
              Links
            </Link>
          </div>
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
