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
import { ReactComponent as LogoMoney } from "./../img/money.svg";

import DashboardCard from "./../components/dashboardCard";

// Import CSS
import style from "./css.js";

class Dashboard extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.dashboard}>
        <Grid container spacing={24}>
          <DashboardCard logo={LogoHashrate} />
          <Grid item sm={4} xs={12}>
            <Paper className={classes.dashboardItem}>
              <Grid
                justify="space-between"
                container
                className={classes.dashboardItemHeaderContainer}
              >
                <Typography
                  className={classes.dashboardItemHeaderTitle}
                  variant="h5"
                >
                  Miners
                </Typography>
                <LogoMiners className={classes.dashboardItemHeaderLogo} />
              </Grid>
              <Divider className={classes.divider} />
              <Grid className={classes.dashboardItemContentContainer}>
                <Typography
                  className={classes.dashboardItemContentTitle}
                  variant="h6"
                >
                  1001
                </Typography>
              </Grid>
            </Paper>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Paper className={classes.dashboardItem}>
              <Grid
                justify="space-between"
                container
                className={classes.dashboardItemHeaderContainer}
              >
                <Typography
                  className={classes.dashboardItemHeaderTitle}
                  variant="h5"
                >
                  Money
                </Typography>
                <LogoMoney className={classes.dashboardItemHeaderLogo} />
              </Grid>
              <Divider className={classes.divider} />
              <Grid className={classes.dashboardItemContentContainer}>
                <Typography
                  className={classes.dashboardItemContentTitle}
                  variant="h6"
                >
                  1001
                </Typography>
              </Grid>
            </Paper>
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
