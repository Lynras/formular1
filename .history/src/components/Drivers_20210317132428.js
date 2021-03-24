import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DriversList from './DriversList';



const Movies = () => (

    <Switch>

        <Route exaxt path='/' component={DriversList}/>

        <Route path='/MovieDetails/:Title' component={MovieDetail}/>

    </Switch>

)



export default Movies;