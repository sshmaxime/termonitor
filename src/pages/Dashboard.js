// Import React components
import React, { Component } from "react";

// Import Redux components
import { connect } from "react-redux";
import ACTIONS from "../modules/action";

// Import Material UI
import {
  InputLabel,
  Input,
  Avatar,
  Card,
  CardActions,
  CardContent,
  Typography,
  FormControlLabel,
  Checkbox,
  withStyles,
  Grid,
  Button,
  FormControl,
  Paper
} from "@material-ui/core";

// Import CSS
import style from "./css.js";

class Dashboard extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.dashboard}>
        <Grid container spacing={24} className={classes.dashboardItem}>
          <Grid item xs={4}>
            <Paper className={classes.dashboardItemElem}>Total Hashrate</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.dashboardItemElem}>Active Workers</Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper className={classes.dashboardItemElem}>Shares</Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(Dashboard));
