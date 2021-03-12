import React, { Component } from 'react';
import { Route, Switch } from 'react-router';

import './App.css';
import Chips from './Chips';
import Navbar from './Navbar';
import Sardines from './Sardines';
import Soda from './Soda';
import VendingMachine from './VendingMachine';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" render={() => <VendingMachine />} />
          <Route exact path="/soda" render={() => <Soda />} />
          <Route exact path="/chips" render={() => <Chips />} />
          <Route exact path="/sardines" render={() => <Sardines />} />
        </Switch>
      </div>
    );
  }
}

export default App;
