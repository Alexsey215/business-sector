import "./App.scss";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/Main"
function App() {

  return (
    <>
      <Container className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Navigate replace to="/posts" />} />
            <Route index path="/posts" element={<Main />} />
            <Route path="/posts/:page" element={<Main />} />
          </Routes>
        </Router>
      </Container>
    </>
  );
}

export default App;
