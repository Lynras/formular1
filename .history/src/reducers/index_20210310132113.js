import { combineReducers } from 'redux';
import driversReducer from './driversReducers';
export default combineReducers( {drivers: driversReducer} );