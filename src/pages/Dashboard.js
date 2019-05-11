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

// Import CSS
import style from "./css.js";

class Dashboard extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.dashboard}>
        <Grid container spacing={24}>
          <Grid item sm={4} xs={12}>
            <Paper className={classes.dashboardItem}>
              <Grid
                justify="space-between"
                container
                className={classes.dashboardItemHeader}
              >
                <Typography className={classes.dashboardItemTitle} variant="h5">
                  Hashrate
                </Typography>
                <LogoHashrate className={classes.dashboardItemLogo} />
              </Grid>
              <Divider className={classes.divider} />
            </Paper>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Paper className={classes.dashboardItem}>
              <Grid
                justify="space-between"
                container
                className={classes.dashboardItemHeader}
              >
                <Typography className={classes.dashboardItemTitle} variant="h5">
                  Miners
                </Typography>
                <LogoMiners className={classes.dashboardItemLogo} />
              </Grid>
              <Divider className={classes.divider} />
            </Paper>
          </Grid>
          <Grid item sm={4} xs={12}>
            <Paper className={classes.dashboardItem}>
              <Grid
                justify="space-between"
                container
                className={classes.dashboardItemHeader}
              >
                <Typography className={classes.dashboardItemTitle} variant="h5">
                  Money
                </Typography>
                <LogoMoney className={classes.dashboardItemLogo} />
              </Grid>
              <Divider className={classes.divider} />
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
