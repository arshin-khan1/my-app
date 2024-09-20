import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router , Routes, Route, Link } from "react-router-dom";

import EditComponent from './Components/Products/EditComponent';
import ListComponent from './Components/Products/ListComponent';
import CreateComponent from './Components/Products/CreateComponent'

function App() {
  return (<Router>
    <Navbar bg="primary">
      <Container>
        <Link to={"/"} className="navbar-brand text-white">
          Basic Crud Appp
        </Link>
      </Container>
    </Navbar>

    <Container className="mt-5">
      <Row>
        <Col md={12}>
        <Routes>
            <Route path="/product/create" element={<CreateComponent />} />
            <Route path="/product/edit/:id" element={<EditComponent />} />
            <Route exact path='/' element={<ListComponent />} />
          </Routes>
        </Col>
      </Row>
    </Container>
  </Router>);
}

export default App;