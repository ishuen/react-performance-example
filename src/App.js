import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import Default from "./pages/Default";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

function App(props) {
  return (
    <Router>
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          <Nav.Link href="/">Default</Nav.Link>
          <Nav.Link href="/page3">Example 1</Nav.Link>
          <Nav.Link href="/page1">Slow Example 2</Nav.Link>
          <Nav.Link href="/page2">Improved Example 2</Nav.Link>
          <Nav.Link href="/page4">Example 3</Nav.Link>
        </Nav>
      </Navbar>
      <Container>
        <Switch>
          <Route exact path="/">
            <Default />
          </Route>
          <Route path="/page1">
            <Page1 />
          </Route>
          <Route path="/page2">
            <Page2 />
          </Route>
          <Route path="/page3">
            <Page3 />
          </Route>
          <Route path="/page4">
            <Page4 />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
