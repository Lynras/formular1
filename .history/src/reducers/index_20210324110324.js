import { combineReducers } from 'redux';
import driversReducer from './driversReducers';
import raceReducer from "./racesReducer"
import constructorReducer from "./constructorReducer";
export default combineReducers( {drivers: driversReducer, races: raceReducer, constructors: constructorReducer } );