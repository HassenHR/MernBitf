// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
  max-width: 1200px;
  width: 90%;
  margin: auto;
`;

export default App;
