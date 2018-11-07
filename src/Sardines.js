import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sardines extends Component {
  render() {
    return (
      <div>
        Sardines
        <Link to="/">Back to Vending Machine</Link>
      </div>
    );
  }
}

export default Sardines;
