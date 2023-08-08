import { Link } from "react-router-dom";
import { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import "./NavBar.css";
import DropdownItems from "../Dropdown/DropdownItems";

interface DropdownStates {
  contact: boolean;
  jeugdschaak: boolean;
  toernooien: boolean;
  teamcompetitie: boolean;
  links: boolean;
}

type NavItem = keyof DropdownStates;

function NavBar() {
  const [click, setClick] = useState(false);
  const changeClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [dropdownStates, setDropdownStates] = useState({
    contact: false,
    jeugdschaak: false,
    toernooien: false,
    teamcompetitie: false,
    links: false,
    // Add more dropdown states as needed for other nav elements
  });

  //Closing and Opening navbar elements on mobile
  const [prevNavItem, setPrevNavItem] = useState<NavItem | null>(null);

  const handleNavItemClick = (navItem: NavItem) => {
    if (prevNavItem && prevNavItem != navItem) {
      setDropdownStates((prevState) => ({
        ...prevState,
        [prevNavItem]: false,
      }));
    }

    if (window.innerWidth <= 960) {
      setDropdownStates((prevState) => ({
        ...prevState,
        [navItem]: !prevState[navItem],
      }));
    }
    setPrevNavItem(navItem);
  };

  const onMouseEnter = (navItem: NavItem) => {
    if (window.innerWidth > 960) {
      setDropdownStates((prevState) => ({
        ...prevState,
        [navItem]: true,
      }));
    }
  };

  const onMouseLeave = (navItem: NavItem) => {
    if (window.innerWidth > 960) {
      setDropdownStates((prevState) => ({
        ...prevState,
        [navItem]: false,
      }));
    }
  };

  return (
    <nav className="navbar">
      <Link to="/home" className="logo">
        {/* <i className="fas fa-home" /> */}
        <img src="./assets/images/kmsk.jpg" className="image-logo"></img>
      </Link>
      <a
        href="https://www.facebook.com/groups/742874852493936"
        target="_blank"
        className="facebook nav-links"
      >
        <img src="./assets/images/facebook.png" width="30px"></img>
      </a>

      {/* Navbar when small window */}
      <div className="menu-icon" onClick={changeClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>

      {/* Navbar */}
      <ul className={click ? "nav-side-menu start" : "nav-side-menu"}>
        <li className="nav-items">
          <div className="nav-links-mobile-container" onClick={closeMobileMenu}>
            <Link
              to="/home"
              className={
                window.innerWidth > 960
                  ? "nav-links"
                  : "nav-links-mobile-dropdown"
              }
            >
              Home
            </Link>
          </div>
        </li>
        <li
          className="nav-items"
          onMouseOver={() => onMouseEnter("contact")}
          onMouseOut={() => onMouseLeave("contact")}
          onClick={() => handleNavItemClick("contact")}
        >
          <div className="nav-links-mobile-container">
            <a
              className={
                window.innerWidth > 960
                  ? "nav-links"
                  : "nav-links-mobile-dropdown"
              }
            >
              Contact
              <i className="fas fa-caret-down" />
            </a>
            {dropdownStates.contact && (
              <Dropdown
                dropdownItems={DropdownItems.Contact}
                closeNavbar={closeMobileMenu}
              />
            )}
          </div>
        </li>
        <li
          className="nav-items"
          onMouseOver={() => onMouseEnter("jeugdschaak")}
          onMouseOut={() => onMouseLeave("jeugdschaak")}
          onClick={() => handleNavItemClick("jeugdschaak")}
        >
          <div className="nav-links-mobile-container">
            <a
              className={
                window.innerWidth > 960
                  ? "nav-links"
                  : "nav-links-mobile-dropdown"
              }
            >
              Jeugd
              <i className="fas fa-caret-down" />
            </a>
            {dropdownStates.jeugdschaak && (
              <Dropdown
                dropdownItems={DropdownItems.Jeugdschaak}
                closeNavbar={closeMobileMenu}
              />
            )}
          </div>
        </li>

        <li
          className="nav-items"
          onMouseOver={() => onMouseEnter("toernooien")}
          onMouseOut={() => onMouseLeave("toernooien")}
          onClick={() => handleNavItemClick("toernooien")}
        >
          <div className="nav-links-mobile-container">
            <a
              className={
                window.innerWidth > 960
                  ? "nav-links"
                  : "nav-links-mobile-dropdown"
              }
            >
              Toernooien
              <i className="fas fa-caret-down" />
            </a>
            {dropdownStates.toernooien && (
              <Dropdown
                dropdownItems={DropdownItems.Toernooien}
                closeNavbar={closeMobileMenu}
              />
            )}
          </div>
        </li>
        <li
          className="nav-items"
          onMouseOver={() => onMouseEnter("teamcompetitie")}
          onMouseOut={() => onMouseLeave("teamcompetitie")}
          onClick={() => handleNavItemClick("teamcompetitie")}
        >
          <div className="nav-links-mobile-container">
            <a
              className={
                window.innerWidth > 960
                  ? "nav-links"
                  : "nav-links-mobile-dropdown"
              }
            >
              Teamcompetitie
              <i className="fas fa-caret-down" />
            </a>
            {dropdownStates.teamcompetitie && (
              <Dropdown
                dropdownItems={DropdownItems.Teamcompetitie}
                closeNavbar={closeMobileMenu}
              />
            )}
          </div>
        </li>
        <li className="nav-items">
          <div className="nav-links-mobile-container" onClick={closeMobileMenu}>
            <Link
              to="/links"
              className={
                window.innerWidth > 960
                  ? "nav-links"
                  : "nav-links-mobile-dropdown"
              }
            >
              Links
            </Link>
          </div>
        </li>
      </ul>
      <Link to="/login" className="nav-links">
        <img src="./assets/images/Profile.jpg" width="30px"></img>
      </Link>
    </nav>
  );
}

export default NavBar;
