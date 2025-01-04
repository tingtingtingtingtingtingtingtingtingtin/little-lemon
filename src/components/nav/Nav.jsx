import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import "./Nav.scss";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/menu">Menu</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/book">Reserve a Table</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
