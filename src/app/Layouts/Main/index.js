import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  NavLink,
} from "react-router-dom";
import { Nav } from "react-bootstrap";

import Home from "../Home";
import About from "../About";
import Experience from "../Experience";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import SideNav from "../../Components/Organism/SideNav";

import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaStackOverflow} from "react-icons/fa";

function Main() {
  return (
    <div className="row py-5 px-3">
      <Router>
        <SideNav>
          <Nav
            defaultActiveKey="/home"
            className="flex-column align-items-start px-4 col-2"
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
          <div className="col row my-4 social-links ml-2">
            <a href="https://web.facebook.com/erik.f.loaiza" className="col-1">
              <FaFacebook />
            </a>
            <a href="https://twitter.com/erikferloaiza" className="col-1">
              <FaTwitter />
            </a>
            <a href="https://www.linkedin.com/in/erikloaiza/" className="col-1">
              <FaLinkedin />
            </a>
            <a href="https://github.com/erikloaiza/" className="col-1">
              <FaGithub />
            </a>
            <a href="https://stackoverflow.com/users/12957088/erik-fernando-loaiza-pati%c3%b1o" className="col-1">
              <FaStackOverflow />
            </a>
          </div>
        </SideNav>
        <div className="col p-0 pr-md-5 mr-md-5">
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
