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
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    setClick(false);
    navigate(path);
  };

  return (
    <div className="drop-selection">
      <ul
        onClick={() => setClick(!click)}
        className={click ? "drop-menu" : "dropdown-menu"}
      >
        {dropdownItems.map((item, index) => (
          <li key={index}>
            <div className="menu-items" onClick={() => handleClick(item.path)}>
              {item.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dropdown;
