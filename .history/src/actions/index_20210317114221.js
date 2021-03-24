import ergast from "../apis/ergast";        

export const fetchDrivers = () => async dispatch => {
    const response = await ergast.get("api/f1/drivers/");
    dispatch({type: "FETCH_DRIVERS", payload: response.data.MRData.DriversTable.Drivers})
};