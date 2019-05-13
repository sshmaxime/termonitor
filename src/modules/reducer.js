import ACTIONS from "./action";
import _ from "lodash";

const initialState = {
  username: "",
  ethermineAddr: "***REMOVED***",
  route: "/dashboard",
  dashboard: {
    UI: {
      isPending: false
    },
    data: {
      generalStats: {
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
      error: null
    }
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
    //
    case ACTIONS.Types.FETCH_DATA_DASHBOARD_PENDING: {
      const store = newState.dashboard;
      store.UI.isPending = true;
      return newState;
    }
    case ACTIONS.Types.FETCH_DATA_DASHBOARD_FULFILLED: {
      const store = newState.dashboard;
      let newGeneralStats = action.payload.currentStatistics;

      store.data.generalStats.time = newGeneralStats.time;
      store.data.generalStats.lastSeen = newGeneralStats.lastSeen;
      store.data.generalStats.reportedHashrate = (
        newGeneralStats.reportedHashrate / 1000000
      ).toFixed(4);
      store.data.generalStats.currentHashrate = (
        newGeneralStats.currentHashrate / 1000000
      ).toFixed(4);
      store.data.generalStats.validShares = newGeneralStats.validShares;
      store.data.generalStats.invalidShares = newGeneralStats.invalidShares;
      store.data.generalStats.staleShares = newGeneralStats.staleShares;
      store.data.generalStats.activeWorkers = newGeneralStats.activeWorkers;
      store.data.generalStats.unpaid = (
        newGeneralStats.unpaid / 1000000000000000000
      ).toFixed(5);

      store.UI.isPending = false;
      return newState;
    }
    case ACTIONS.Types.FETCH_DATA_DASHBOARD_REJECTED: {
      const store = newState.dashboard;
      let error = action.payload;

      store.dashboard.error = error;
      store.UI.isPending = false;
      return newState;
    }
    default:
      return newState;
  }
};

export default globalReducer;
