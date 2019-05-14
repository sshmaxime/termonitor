import React, { Component } from "react";

// Import Material UI
import { Typography, withStyles, Grid, Paper, Divider } from "@material-ui/core";

import style from "./dashboardCardCss";

class DashboardCard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid item sm={this.props.sm} xs={this.props.xs}>
        <Paper className={classes.card}>
          <Grid justify="space-between" container className={classes.cardHeaderContainer}>
            <Typography className={classes.cardHeaderTitle} variant="h6">
              {this.props.title}
            </Typography>
            <this.props.logo className={classes.cardHeaderLogo} />
          </Grid>
          <Divider className={classes.divider} />
          <Grid className={classes.cardContentContainer}>
            <Typography className={classes.cardContentTitle} variant="h5">
              {this.props.content}
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(style)(DashboardCard);
