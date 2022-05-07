import { useEffect, useState } from "react";
import "./App.scss";
import {Container, Row, Col} from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main"
function App() {

    return (
    <>
      <Container className="App">
        <Router>
          <Routes>
            <Route index path="/posts" element={<Main/>}/>
            <Route path="/posts/:id" element={<Main/>}/>
          </Routes>
        </Router>
      </Container>
    </>
    );
}

export default App;
