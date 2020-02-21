import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { Nav } from 'react-bootstrap';

import Home from '../Home'

function Main() {
  return (
    <div className="App py-5 px-3">
    <Nav defaultActiveKey="/home" className="flex-column align-items-start">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link href="/home">Experience</Nav.Link>
      <Nav.Link href="/home">Portfolio</Nav.Link>
      <Nav.Link eventKey="link-2">Contact</Nav.Link>
    </Nav>
      <Router>
        <Switch>
        <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default Main;