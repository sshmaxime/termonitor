import React, { Component } from "react";

// Import Material UI
import { Typography, withStyles, Grid, Paper, Divider } from "@material-ui/core";

import { chartStyle, style } from "./dashboardGraphCss";
import ReactApexChart from "react-apexcharts";

class DashboardGraph extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={this.props.xs}>
        <Paper className={classes.card}>
          <Grid justify="space-between" container className={classes.cardHeaderContainer}>
            <Typography className={classes.cardHeaderTitle} variant="h6">
              {this.props.title}
            </Typography>
          </Grid>
          <Divider className={classes.divider} />
          <ReactApexChart
            options={chartStyle.options}
            series={chartStyle.series}
            type="area"
            height="300"
          />
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(style)(DashboardGraph);
