import Axios from "axios";

const apiMinersEndpoint = "https://api.ethermine.org/";
const apiWalletEndpoint =
  "https://api.etherscan.io/api?module=account&action=balance&tag=latest&address=";
// Types of action
const Types = {
  UPDATE_USERNAME: "UPDATE_USERNAME",
  UPDATE_ROUTE: "UPDATE_ROUTE",

  // DASHBOARD
  FETCH_DATA_DASHBOARD: "FETCH_DATA_DASHBOARD",
  FETCH_DATA_DASHBOARD_PENDING: "FETCH_DATA_DASHBOARD_PENDING",
  FETCH_DATA_DASHBOARD_FULFILLED: "FETCH_DATA_DASHBOARD_FULFILLED"
  ////////////
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

///////////////////////////
// DASHBOARD MAIN ACTION //
///////////////////////////
const fetchDataDashboard = () => (dispatch, getState) => {
  // PENDING
  dispatch({
    type: Types.FETCH_DATA_DASHBOARD,
    subType: Types.FETCH_DATA_DASHBOARD_PENDING
  });
  const urlMiners = apiMinersEndpoint + "miner/" + getState().userData.ethAddr + "/dashboard/";
  const urlWallet = apiWalletEndpoint + getState().userData.ethAddr;

  Axios.all([Axios.get(urlMiners), Axios.get(urlWallet)]).then(
    Axios.spread((_dataMiners, _dataWallet) => {
      // DATA
      dispatch({
        type: Types.FETCH_DATA_DASHBOARD,
        subType: Types.FETCH_DATA_DASHBOARD_FULFILLED,
        payload: {
          dataMiners: _dataMiners.data.data,
          dataWallet: _dataWallet.data
        }
      });
    })
  );
};

export default {
  updateUsername,
  updateRoute,
  fetchDataDashboard,
  Types
};
