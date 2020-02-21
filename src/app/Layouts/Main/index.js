import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  NavLink
} from "react-router-dom";
import { Nav } from "react-bootstrap";

import Home from "../Home";
import About from "../About";
import Experience from "../Experience";
import Portfolio from "../Portfolio";
import Contact from "../Contact";

function Main() {
  return (
    <div className="row py-5 px-3">
      <Router>
        <Nav
          defaultActiveKey="/home"
          className="flex-column align-items-start px-4 d-none d-md-flex col-2"
        >
          <NavLink className="nav-link" to="/home">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/experience">
            Experience
          </NavLink>
          <NavLink className="nav-link" to="/portfolio">
            Portfolio
          </NavLink>
          <NavLink className="nav-link" to="/Contact">
            Contact
          </NavLink>
        </Nav>
        <div className="col p-0">
        <div className="container">
            <Switch>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/experience">
                <Experience />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
        </div>
        </div>

      </Router>
    </div>
  );
}

export default Main;
