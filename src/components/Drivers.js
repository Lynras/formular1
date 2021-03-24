import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DriversList from './DriversList';
import RaceList from "./RaceList"

const Drivers = () => (
    <Switch>
        <Route exact path='/DriversList' component={DriversList}/>
        <Route path='/RaceList/:Race' component={RaceList}/>
    </Switch>
)

export default Drivers;