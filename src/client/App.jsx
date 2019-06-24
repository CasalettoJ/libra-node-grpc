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
    return <Home apiAddr="http://localhost:3001" />;
}

ReactDOM.render(<App />, document.getElementById("app"));
