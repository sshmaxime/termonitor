import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ToDO from "./pages/todo";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./modules/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

class App extends Component {
  render() {
    return (
      <ReduxProvider store={reduxStore}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">ToDo Redux app</h1>
          </header>
          <ToDO />
        </div>
      </ReduxProvider>
    );
  }
}

export default App;



// import React from 'react';
// import './App.css';
// import Loading from './components/Loading'
// import ToDO from './components/Dashboard'

// function App() {
//   return (
//     <div className="App">
//       <ToDO></ToDO>
//     </div>
//   );
// }

// export default App;
