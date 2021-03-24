import ergast from '../apis/ergast';

export const fetchRaces = () => async dispatch => {
    const response = await ergast.get('/api/f1/races.json');
    dispatch({type: 'FETCH_RACES', payload: response.data.MRData.RaceTable.Races})
};

export const fetchWinners = () => async dispatch => {
    const response = await ergast.get('/api/f1/2008/5/driver_Standings.json');
    dispatch({type: 'FETCH_WINNERS', payload: response.data.MRData.driverStandingsTable.Races})
};

export const fetchDrivers = () => async dispatch => {
    const response = await ergast.get('/api/f1/drivers.json');
    dispatch({type: 'FETCH_DRIVERS', payload: response.data.MRData.DriverTable.Drivers})

};
