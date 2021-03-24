import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DriversList from './DriversList';
import RaceList from "./RaceList"



const Drivers = () => (

    <Switch>

        <Route exaxt path='/' component={DriversList}/>

        <Route path='/Racelist/:Title' component={RaceList}/>

    </Switch>

)



export default Movies;