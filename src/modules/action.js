import Axios from "axios";

const apiMinersEndpoint = "https://api.ethermine.org/";
const apiWalletEndpoint =
  "https://api.etherscan.io/api?module=account&action=balance&tag=latest&address=";
// Types of action
const Types = {
  UPDATE_ADDR: "UPDATE_ADDR",
  UPDATE_ROUTE: "UPDATE_ROUTE",

  // DASHBOARD
  FETCH_DATA_DASHBOARD: "FETCH_DATA_DASHBOARD",
  FETCH_DATA_DASHBOARD_PENDING: "FETCH_DATA_DASHBOARD_PENDING",
  FETCH_DATA_DASHBOARD_FULFILLED: "FETCH_DATA_DASHBOARD_FULFILLED",
  FETCH_DATA_DASHBOARD_ERROR: "FETCH_DATA_DASHBOARD_ERROR"
  ////////////
};

// Actions
const updateAddr = (_addr, _doSave) => ({
  type: Types.UPDATE_ADDR,
  payload: {
    addr: _addr,
    doSave: _doSave
  }
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

  Axios.all([Axios.get(urlMiners), Axios.get(urlWallet)])
    .then(
      Axios.spread((_dataMiners, _dataWallet) => {
        if (
          _dataMiners.status !== 200 ||
          _dataMiners.data.status !== "OK" ||
          _dataWallet.status !== 200 ||
          _dataWallet.data.status !== "1"
        ) {
          // ERROR
          dispatch({
            type: Types.FETCH_DATA_DASHBOARD,
            subType: Types.FETCH_DATA_DASHBOARD_ERROR,
            payload: {
              error: "Invalid Address"
            }
          });
          return;
        }
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
    )
    .catch(() => {
      // UNKNOWN ERROR
      dispatch({
        type: Types.FETCH_DATA_DASHBOARD,
        subType: Types.FETCH_DATA_DASHBOARD_ERROR,
        payload: {
          error: "Unknown Error"
        }
      });
    });
};

export default {
  updateAddr,
  updateRoute,
  fetchDataDashboard,
  Types
};
