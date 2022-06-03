import React from "react";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import IntroPage from "./components/IntroPage";
import Signup from "./components/Signup";
import Store from "./components/Store";
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
        {/* note: intro page should be default but right now its set to HomePage for convenience */}
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/" element={<IntroPage />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/Signup" element={<Signup />} /> */}
        <Route path="/store" element={<Store />} />
      </Routes>
    </BrowserRouter>
    // <Homepage />
  )
}

export default App;