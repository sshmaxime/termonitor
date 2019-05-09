import ACTIONS from "./action";
import _ from "lodash";

const initialState = {
  userName: ""
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.Types.UPDATE_USERNAME: {
      let newUsername = action.payload;
      let newState = _.cloneDeep(state);
      newState.userName = newUsername;
      return newState;
    }
    default:
      return state;
  }
};

export default globalReducer;
