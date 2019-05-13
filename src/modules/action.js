import Axios from "axios";

const apiEndpoint = "https://api.ethermine.org/";

// Types of action
const Types = {
  UPDATE_USERNAME: "UPDATE_USERNAME",
  UPDATE_ROUTE: "UPDATE_ROUTE",

  FETCH_DATA_DASHBORD: "FETCH_DATA_DASHBORD",
  FETCH_DATA_DASHBOARD_PENDING: "FETCH_DATA_DASHBOARD_PENDING",
  FETCH_DATA_DASHBOARD_FULFILLED: "FETCH_DATA_DASHBOARD_FULFILLED",
  FETCH_DATA_DASHBOARD_REJECTED: "FETCH_DATA_DASHBOARD_REJECTED"
};

// Actions
const updateUsername = username => ({
  type: Types.UPDATE_USERNAME,
  payload: username
});
const updateRoute = route => ({
  type: Types.UPDATE_ROUTE,
  payload: route
});

const fetchDataDashboard = () => (dispatch, getState) => {
  const url = apiEndpoint + "miner/" + getState().ethermineAddr + "/dashboard/";
  dispatch({ type: Types.FETCH_DATA_DASHBOARD_PENDING });

  return Axios.get(url)
    .then(data => {
      dispatch({
        type: Types.FETCH_DATA_DASHBOARD_FULFILLED,
        payload: data.data.data
      });
    })
    .catch(error => {
      dispatch({
        type: Types.FETCH_DATA_DASHBOARD_REJECTED,
        payload: error.message || "Unexpected Error!!!"
      });
    });
};

export default {
  updateUsername,
  updateRoute,
  fetchDataDashboard,
  Types
};
