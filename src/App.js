import React from "react";
import Home from "./Pages/Home";
import Starred from "./Pages/Starred";
import Error from "./Pages/Error";
import Nav from "./Component/Nav";
import { Switch, Route } from "react-router";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/starred">
          <Starred />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </>
  );
};

export default App;