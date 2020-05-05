import React from 'react';
import logo from './logo.svg';
import {Navbar,Jumbotron,Container} from 'react-bootstrap'
import './App.css';

function App() {
  return (
    <>
    
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />{'  '}
      React Navbar
    </Navbar.Brand>
  </Navbar>
  <Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
  </Jumbotron>
  
  </>
  );
}

export default App;
