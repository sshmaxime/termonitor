import ACTIONS from "./action";
import _ from "lodash";

const initialState = {
  route: "/dashboard",
  userData: {
    username: "",
    ethermineAddr: "***REMOVED***"
  },
  dashboard: {
    UI: {
      isLoading: false
    },
    data: {
      currentStatistics: {
        time: null,
        lastSeen: null,
        reportedHashrate: null,
        currentHashrate: null,
        validShares: null,
        invalidShares: null,
        staleShares: null,
        activeWorkers: null,
        unpaid: null
      },
      statistics: null,
      minPayout: null
    },
    error: null
  }
};

const globalReducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case ACTIONS.Types.UPDATE_USERNAME: {
      let newUsername = action.payload;
      newState.username = newUsername;
      return newState;
    }
    case ACTIONS.Types.UPDATE_ROUTE: {
      let newRoute = action.payload;
      newState.route = newRoute;
      return newState;
    }

    ///////////////////////////////
    ////////// DASHBOARD //////////
    ///////////////////////////////
    case ACTIONS.Types.FETCH_DATA_DASHBOARD: {
      const subType = action.subType;
      const payload = action.payload;
      let store = newState.dashboard;

      if (subType === ACTIONS.Types.FETCH_DATA_DASHBOARD_PENDING)
        store = dashboardFetchPending(store, payload);
      else if (subType === ACTIONS.Types.FETCH_DATA_DASHBOARD_FULFILLED)
        store = dashboardFetchFulfilled(store, payload);
      else if (subType === ACTIONS.Types.FETCH_DATA_DASHBOARD_REJECTED)
        store = dashboardFetchRejected(store, payload);

      newState.dashboard = store;
      return newState;
    }
    default:
      return newState;
  }
};

///////////////////////////////
////////// DASHBOARD //////////
///////////////////////////////
const dashboardFetchPending = (store, _) => {
  store.UI.isLoading = true;
  return store;
};
const dashboardFetchFulfilled = (store, payload) => {
  let currentStatistics = payload.currentStatistics;

  store.data.currentStatistics.time = new Date(currentStatistics.time * 1000);
  store.data.currentStatistics.lastSeen = new Date(currentStatistics.lastSeen * 1000);
  store.data.currentStatistics.reportedHashrate =
    (currentStatistics.reportedHashrate / 1000000).toFixed(1) + " MH/s";
  store.data.currentStatistics.currentHashrate =
    (currentStatistics.currentHashrate / 1000000).toFixed(1) + " MH/s";
  store.data.currentStatistics.validShares = currentStatistics.validShares;
  store.data.currentStatistics.invalidShares = currentStatistics.invalidShares;
  store.data.currentStatistics.staleShares = currentStatistics.staleShares;
  store.data.currentStatistics.activeWorkers = currentStatistics.activeWorkers;
  store.data.currentStatistics.unpaid =
    (currentStatistics.unpaid / 1000000000000000000).toFixed(5) + " ETH";

  // transform data to isostring for statistics
  // console.log(store.data.currentStatistics.time.toISOString());
  store.UI.isLoading = false;
  return store;
};
const dashboardFetchRejected = (store, payload) => {
  store.error = payload;

  store.UI.isLoading = false;
  return store;
};

export default globalReducer;
