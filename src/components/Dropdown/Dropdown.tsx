import { useState } from "react";
import { Link } from "react-router-dom";
// import DropdownItems from "./DropdownItems";
import "./Dropdown.css";

interface DropdownItem {
  title: string;
  path: string;
}

interface DropdownProps {
  dropdownItems: DropdownItem[];
  closeNavbar: () => void;
}

const Dropdown = ({ dropdownItems, closeNavbar }: DropdownProps) => {
  const [click, setClick] = useState(false);

  return (
    <div className="drop-selection">
      <ul
        onClick={() => setClick(!click)}
        className={click ? "drop-menu" : "dropdown-menu"}
      >
        {dropdownItems.map((item, index) => (
          <li key={index}>
            <Link className="menu-items" to={item.path} onClick={closeNavbar}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dropdown;
