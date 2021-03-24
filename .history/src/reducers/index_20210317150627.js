import { combineReducers } from 'redux';
import driversReducer from './driversReducers';
import raceReducer from "./racesReducer"
import winnerReducer from "./winnerReducer"
export default combineReducers( {drivers: driversReducer, races: raceReducer, winners: winnerReducer} );