import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VendingMachine extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/soda">Soda</Link>
        </li>
        <li>
          <Link to="/chips">Chips</Link>
        </li>
        <li>
          <Link to="/sardines">Sardines</Link>
        </li>
      </ul>
    );
  }
}

export default VendingMachine;
