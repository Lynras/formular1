import React, { Component } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Header/>
          <Main/>
        </header>
      </div>
    );
  }
}

export default App;