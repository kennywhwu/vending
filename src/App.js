import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VendingMachine from './VendingMachine';
import Soda from './Soda';
import Chips from './Chips';
import Sardines from './Sardines';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/Soda" render={() => <Soda />} />
          <Route exact path="/Chips" render={() => <Chips />} />
          <Route exact path="/Sardines" render={() => <Sardines />} />
        </Switch>
      </div>
    );
  }
}

export default App;
