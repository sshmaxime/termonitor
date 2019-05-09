// Types of action
const Types = {
  UPDATE_USERNAME: "UPDATE_USERNAME"
};

// Actions
const updateUsername = username => ({
  type: Types.UPDATE_USERNAME,
  payload: username
});

export default {
  updateUsername,
  Types
};
