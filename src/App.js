// Import React components
import React, { Component } from "react";
import { connect } from "react-redux";

// Import Material UI
import { withStyles } from "@material-ui/core";

// Import our components
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NavBar from "./components/navbar";

// Import Routes
import Routes from "./route";

const style = theme => ({
  app: {
    "background-color": "#1e1e2f",
    position: "absolute",
    height: "100%",
    width: "100%",
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 7.5
  }
});

class App extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar />
        <div className={classes.app}>
          {this.props.route === Routes.HOME ? <Home /> : null}
          {this.props.route === Routes.DASHBOARD ? <Dashboard /> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  route: state.route
});

export default connect(mapStateToProps)(withStyles(style)(App));
