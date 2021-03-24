import React, { Component } from 'react';
import DriverList from '../components/DriversList';
import Header from './Header';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
          <DriverList/>
        </header>
      </div>
    );
  }
}

export default App;