import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import dotenv from "dotenv";

// // Load environment variables from .env or .local.env file, where API keys and passwords are configured
// dotenv.config({
//   path: process.env.NODE_ENV !== "development" ? "../.env" : "../.local.env"
// });

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
