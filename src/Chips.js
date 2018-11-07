import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Chips extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 0 };
  }

  render() {
    return (
      <div>
        Chips
        <button onClick={() => this.setState(st => ({ num: st.num + 1 }))}>
          Noms: {this.state.num}
        </button>
        <Link to="/">Back to Vending Machine</Link>
      </div>
    );
  }
}

export default Chips;
