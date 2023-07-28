import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import DropdownItems from "./DropdownItems";
import "./Dropdown.css";

interface DropdownItem {
  title: string;
  path: string;
}

interface DropdownProps {
  dropdownItems: DropdownItem[];
}

const Dropdown = ({ dropdownItems }: DropdownProps) => {
  const [click, setClick] = useState(false);

  return (
    <div className="drop-selection">
      <ul
        onClick={() => setClick(!click)}
        className={click ? "drop-menu" : "dropdown-menu"}
      >
        {dropdownItems.map((item, index) => (
          <li key={index}>
            <Link className="menu-items" to={item.path}>
              {item.title}
            </Link>
            {/* {click ? ( // If dropdown is open, render a regular div
              <div className="menu-items" onClick={() => setClick(false)}>
                {item.title}
              </div>
            ) : (
              // If dropdown is closed, render a Link component
              <Link
                className="menu-items"
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            )} */}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dropdown;
