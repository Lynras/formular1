import React, { Component } from 'react';
import DriverList from '../components/DriversList';
import Header from '../components/Header';
import RaceList from '../components/RaceList';
import Main from '../components/Main';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <Main/>
          <DriverList/>
          <RaceList/>
        </header>
      </div>
    );
  }
}

export default App;