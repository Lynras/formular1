import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DriversList from './DriversList';
import Drivers from "./Drivers";
import RaceList from './RaceList';



class Main extends Component {
    render() {
      console.log("Main");
      return (
            <main className = "main row">
              <div className = "col-1"></div>
              <div className = "col-8">
                <Switch>
                    <Route exact path='/' component={DriversList}/>
                    <Route path='/DriversList'  component={DriversList}/>
                    <Route path='/RaceList'  component={RaceList}/>
                </Switch>
                </div>
                <div className = "col-3"></div>
            </main>
      );
    }
  }
  export default Main;