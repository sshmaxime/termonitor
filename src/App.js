// Import React components
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { Redirect } from "react-router";

// Import Redux components
import configureStore from "./modules/store";

// Import our components
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends Component {
  componentDidMount() {
    Redirect("/");
  }
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <Router>
          <div className="App">
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" exact component={Dashboard} />
          </div>
        </Router>
      </ReduxProvider>
    );
  }
}

export default App;
