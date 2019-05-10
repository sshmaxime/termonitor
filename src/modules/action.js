// Types of action
const Types = {
  UPDATE_USERNAME: "UPDATE_USERNAME",
  UPDATE_ROUTE: "UPDATE_ROUTE"
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

export default {
  updateUsername,
  updateRoute,
  Types
};
