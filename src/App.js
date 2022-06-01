import React from "react";
import Login from "./components/login";
import Homepage from "./components/Homepage";
// import IntroPage from "./components/IntroPage";
// import Signup from "./components/signup";
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    // <Homepage />
  )
}

export default App;