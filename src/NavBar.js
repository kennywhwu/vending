import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <NavLink to="/">Vending Machine</NavLink>
        <NavLink to="/Soda">Soda</NavLink>
        <NavLink to="/Chips">Chips</NavLink>
        <NavLink to="/Sardines">Sardines</NavLink>
      </nav>
    );
  }
}

export default NavBar;
