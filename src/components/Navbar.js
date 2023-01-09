import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className='navbar'>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
}