// Import React components
import React, { Component } from "react";
import { connect } from "react-redux";
import ACTIONS from "./modules/action";

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
  componentDidMount() {
    if (this.props.userData.ethAddr) {
      this.props.updateRoute(Routes.DASHBOARD);
    }
  }
  handleHomeSubmit = event => {
    this.props.updateRoute(Routes.DASHBOARD);
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <NavBar
          handleButton={this.handleHomeSubmit}
          ethAddr={this.props.userData.ethAddr}
          balance={this.props.data.balance}
          isReady={this.props.isReady}
        />
        <div className={classes.app}>
          {this.props.route === Routes.HOME ? <Home /> : null}
          {this.props.route === Routes.DASHBOARD ? <Dashboard /> : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  route: state.route,
  userData: state.userData,
  data: state.dashboard.data,
  isReady: state.dashboard.UI.isReady
});

const mapDispatchToProps = dispatch => ({
  updateRoute: route => dispatch(ACTIONS.updateRoute(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(style)(App));
