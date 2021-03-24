import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DriversList from './DriversList';
import RaceList from "./RaceList"



const Drivers = () => (

    <Switch>

        <Route exaxt path='/' component={DriversList}/>
        <Route path='/Racelist/:Race' component={RaceList}/>

    </Switch>

)



export default Drivers;