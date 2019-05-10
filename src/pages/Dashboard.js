import React, { Component } from "react";

import { withStyles } from "@material-ui/core";

import { connect } from "react-redux";

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
