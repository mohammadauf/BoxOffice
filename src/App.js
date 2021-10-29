import React from "react";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import Error from "./Pages/Error";
import Show from "./Pages/Show";
import { Switch, Route } from "react-router";

// import "./Style/root.css";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/starred">
        <Starred />
      </Route>
      <Route exact path="/show:id">
        <Show />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  );
};

export default App;
