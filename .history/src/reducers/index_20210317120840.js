import { combineReducers } from 'redux';
import driversReducer from './driversReducers';
import raceReducer from "./racesReducer"
export default combineReducers( {drivers: driversReducer}, {races: raceReducer} );