import React, { Component } from "react";

// Import Material UI
import {
  Typography,
  withStyles,
  Grid,
  Paper,
  Divider
} from "@material-ui/core";

import style from "./dashboardCardCss";

class DashboardCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid item sm={4} xs={12}>
        <Paper className={classes.card}>
          <Grid
            justify="space-between"
            container
            className={classes.cardHeaderContainer}
          >
            <Typography className={classes.cardHeaderTitle} variant="h5">
              Hashrate
            </Typography>
            <this.props.logo className={classes.cardHeaderLogo} />
          </Grid>
          <Divider className={classes.divider} />
          <Grid className={classes.cardContentContainer}>
            <Typography className={classes.cardContentTitle} variant="h6">
              1001
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(style)(DashboardCard);
