import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditUser from "./EditUser";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Route path="/" exact>
      <App />
    </Route>
    <Route path="/edit/:id" component={EditUser} />
  </Router>
);
