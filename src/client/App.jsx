// https://babeljs.io/docs/en/babel-polyfill
// Make sure polyfill is imported before any other code at entrypoint.
import "core-js/stable";
import "regenerator-runtime/runtime";
//  standardize styles across browsers
import "normalize.css";

import React from "react";
import ReactDOM from "react-dom";

// Components
import Home from "./components/Home";

function App() {
    return <Home address="ac.testnet.libra.org:8000" />;
}

// "document" can technically be null and so flow gives an error to getElementById()'s call.
ReactDOM.render(<App />, document.getElementById("app"));
