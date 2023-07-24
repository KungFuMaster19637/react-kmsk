import React from "react";
import { Link } from "react-router-dom";

const NavButton = () => {
  return (
    <Link to="/about">
      <button className="btn-dark">Historiek</button>
    </Link>
  );
};

export default NavButton;
