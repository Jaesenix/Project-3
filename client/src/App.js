import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import LiveUpdates from "./pages/LiveUpdates";
import SignUp from "./pages/Signup";
import Members from "./pages/Members";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/liveupdates" component={LiveUpdates} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/members" component={Members} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
