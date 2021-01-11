import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import Links from "./links";
import Product from "./pages/product";
import Services from "./pages/services";
import About from './pages/about';
const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" ><Links /></Route>
        <Route exact path="/about" ><About /></Route>
        <Route path="/product"><Product /></Route>
        <Route path="/services"><Services /></Route>
      </Switch>
    </Router>
  );
}

export default Routes;