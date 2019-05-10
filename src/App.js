// Import React components
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Import Redux components
import configureStore from "./modules/store";
import { Provider as ReduxProvider } from "react-redux";

// Import Material UI
import { withStyles } from "@material-ui/core";

// Import our components
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

// Import Routes
import Routes from "./route";

// Create Redux store
const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

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
        <ReduxProvider store={reduxStore}>
          <Router>
            <Route exact path={Routes.HOME} component={Home} />
            <Route path={Routes.DASHBOARD} component={Dashboard} />
          </Router>
        </ReduxProvider>
      </div>
    );
  }
}

export default withStyles(style)(App);
