
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import DriversList from '../components/DriversList';
import RaceList from '../components/RaceList';
import MovieDetails from './MovieDetail';

class Main extends Component {
    render() {
      console.log("Main");
      return (
            <main className = "main row">
              <div className = "col-1"></div>
              <div className = "col-8">
                <Switch>
                    <Route exact path='/' component={}/>
                    <Route path='/About'  component={About}/>
                    <Route path='/Login'  component={}/>
                    <Route path='/Admin'  component={}/>
                    <Route path='/MovieDetails'  component={MovieDetails}/>
                </Switch>
                </div>
                <div className = "col-3"></div>
            </main>
      );
    }
  }
 

  export default Main;