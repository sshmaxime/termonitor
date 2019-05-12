import Axios from "axios";

const apiUrl = "https://reqres.in/api/users/2?delay=3";

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

const fetchDataDashboard = () => dispatch => {
  dispatch({ type: Types.FETCH_DATA_DASHBOARD_PENDING });

  return Axios.get(apiUrl)
    .then(data => {
      dispatch({ type: Types.FETCH_DATA_DASHBOARD_FULFILLED, data });
    })
    .catch(error => {
      dispatch({
        type: Types.FETCH_DATA_DASHBOARD_REJECTED,
        error: error.message || "Unexpected Error!!!"
      });
    });
};

export default {
  updateUsername,
  updateRoute,
  fetchDataDashboard,
  Types
};
