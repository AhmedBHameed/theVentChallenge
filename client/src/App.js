import React, { Component } from "react";
import "./App.scss";

// Pages
import Home from "./Pages/Home";

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
