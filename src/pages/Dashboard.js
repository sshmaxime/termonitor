// Import React components
import React, { Component } from "react";
//import { Redirect } from "react-router-dom";

// Import Redux components
import { connect } from "react-redux";

// Import Material UI
import { withStyles } from "@material-ui/core";

// Import CSS
import style from "./css.js";

class Dashboard extends Component {
  state = {};
  render() {
    return <div />;
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(Dashboard));
