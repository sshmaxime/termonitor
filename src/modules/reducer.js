import ACTIONS from "./action";
import _ from "lodash";

const initialState = {
  username: "",
  ethermineAddr: "***REMOVED***",
  route: "/dashboard",
  dashboard: {
    isPending: false,
    data: "",
    error: ""
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
      newState.dashboard.isPending = true;
      return newState;
    }
    case ACTIONS.Types.FETCH_DATA_DASHBOARD_FULFILLED: {
      let data = action.payload;
      newState.dashboard.isPending = false;
      newState.dashboard.data = data;
      return newState;
    }
    case ACTIONS.Types.FETCH_DATA_DASHBOARD_REJECTED: {
      let error = action.payload;
      newState.dashboard.isPending = false;
      newState.dashboard.error = error;
      return newState;
    }
    default:
      return newState;
  }
};

export default globalReducer;
