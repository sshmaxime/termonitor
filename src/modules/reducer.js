import ACTIONS from "./action";
import _ from "lodash";

const initialState = {
  username: "",
  ethermineAddr: "",
  route: "/dashboard"
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.Types.UPDATE_USERNAME: {
      let newUsername = action.payload;
      let newState = _.cloneDeep(state);
      newState.username = newUsername;
      return newState;
    }
    case ACTIONS.Types.UPDATE_ROUTE: {
      let newRoute = action.payload;
      let newState = _.cloneDeep(state);
      newState.route = newRoute;
      return newState;
    }
    default:
      return state;
  }
};

export default globalReducer;
