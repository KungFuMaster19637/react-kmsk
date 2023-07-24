import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const handleClick = () => setClick(!click);

  return (
    <div className="drop-selection">
      <ul
        onClick={handleClick}
        className={click ? "drop-menu" : "dropdown-menu"}
      >
        {dropdownItems.map((item, index) => (
          <li key={index}>
            <Link
              className="menu-items"
              to={item.path}
              onClick={() => setClick(false)}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dropdown;
