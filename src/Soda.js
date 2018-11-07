import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Soda extends Component {
  render() {
    return (
      <div>
        Soda
        <Link to="/">Back to Vending Machine</Link>
      </div>
    );
  }
}

export default Soda;
