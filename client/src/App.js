import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.scss";

// Pages
import Home from "./Pages/Home";

// console.log(process.env);process.env.NODE_ENV

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
