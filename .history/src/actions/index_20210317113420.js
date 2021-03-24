import ergast from "./api/ergast"

export const fetchDrivers = () => async dispatch => {
    const response = await ergast.get("/api/f1/drivers.json");
    dispatch({type: "FETCH_DRIVERS", payload: response.data.MRData.DriversTable.Drivers})
};