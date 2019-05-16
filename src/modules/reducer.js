import ACTIONS from "./action";
import _ from "lodash";

const initialState = {
  route: "/",
  userData: {
    ethAddr: "" //***REMOVED***
  },
  dashboard: {
    UI: {
      isLoading: true
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
      minPayout: null,
      balance: null
    },
    error: null
  }
};

const globalReducer = (state = initialState, action) => {
  let newState = _.cloneDeep(state);
  switch (action.type) {
    case ACTIONS.Types.UPDATE_ADDR: {
      let newAddr = action.payload;
      newState.userData.ethAddr = newAddr;
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
        store = dashboardPending(store, payload);
      else if (subType === ACTIONS.Types.FETCH_DATA_DASHBOARD_FULFILLED)
        store = dashboardFulfilled(store, payload);

      newState.dashboard = store;
      return newState;
    }
    default:
      return newState;
  }
};

//////////////////////////////////////
////////// DASHBOARD_MINERS //////////
//////////////////////////////////////
const dashboardPending = (store, _) => {
  store.UI.isLoading = true;
  return store;
};
const dashboardFulfilled = (store, payload) => {
  // MINERS //
  let payloadMiners = payload.dataMiners;
  let currentStatistics = payloadMiners.currentStatistics;
  let statistics = payloadMiners.statistics;

  store.data.currentStatistics.time = new Date(currentStatistics.time * 1000).toISOString();
  store.data.currentStatistics.lastSeen = new Date(currentStatistics.lastSeen * 1000).toISOString();
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
  store.data.statistics = parseStatistics(statistics);

  // WALLET //
  let payloadWallet = payload.dataWallet;
  store.data.balance = (payloadWallet.result / 1000000000000000000).toFixed(2) + " ETH";

  store.UI.isLoading = false;
  return store;
};

///////////////////////////////////
////////// PARSING TOOLS //////////
///////////////////////////////////

const parseStatistics = statistics => {
  let newStatistics = [];
  statistics.forEach(function(statistic) {
    statistic.reportedHashrate = (statistic.reportedHashrate / 1000000).toFixed(1);
    statistic.currentHashrate = (statistic.currentHashrate / 1000000).toFixed(1);
    statistic.time = new Date(statistic.time * 1000).toISOString();
    newStatistics.push(statistic);
  });
  return newStatistics;
};

export default globalReducer;
