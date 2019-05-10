// Import React components
import React, { Component } from "react";
import { connect } from "react-redux";

// Import Material UI
import { withStyles } from "@material-ui/core";

// Import our components
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

// Import Routes
import Routes from "./route";

const style = theme => ({
  app: {
    "background-color": "#040608",
    position: "absolute",
    height: "100%",
    width: "100%",
    padding: theme.spacing.unit * 2
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.app}>
        {this.props.route === Routes.HOME ? <Home /> : null}
        {this.props.route === Routes.DASHBOARD ? <Dashboard /> : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  route: state.route
});

export default connect(mapStateToProps)(withStyles(style)(App));
