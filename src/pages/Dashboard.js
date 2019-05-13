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
  Paper,
  SvgIcon,
  Divider
} from "@material-ui/core";

import { ReactComponent as LogoHashrate } from "./../img/hashrate.svg";
import { ReactComponent as LogoMiners } from "./../img/miners.svg";
import { ReactComponent as LogoBalance } from "./../img/money.svg";

import DashboardCard from "./../components/dashboardCard";

// Import CSS
import style from "./css.js";

class Dashboard extends Component {
  state = {};
  componentDidMount() {
    this.props.fetchDataDashboard();
  }
  render() {
    const { classes } = this.props;
    if (this.props.store.isPending) {
      return <div>loasssding</div>;
    }
    // TODO console.log(this.props.store.data.currentStatistics.time);
    return (
      <div className={classes.dashboard}>
        <Grid container spacing={24}>
          <DashboardCard
            logo={LogoHashrate}
            title={"Hashrate"}
            content={"1"}
            xs={12}
            sm={4}
          />
          <DashboardCard
            logo={LogoMiners}
            title={"Miners"}
            content={"1000"}
            xs={12}
            sm={4}
          />
          <DashboardCard
            logo={LogoBalance}
            title={"Balance"}
            content={"1000"}
            xs={12}
            sm={4}
          />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  store: state.dashboard
});

const mapDispatchToProps = dispatch => ({
  fetchDataDashboard: () => dispatch(ACTIONS.fetchDataDashboard())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(Dashboard));
