import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import IntroPage from "./components/IntroPage";
import Signup from "./components/Signup";
import Store from "./components/Store";
import HatStore from "./components/HatStore";

import API from '../src/utils/API'
// import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null)
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken)
    }
  }, [])
  useEffect(() => {
    if (token) {
      API.verify(token).then(userData => {
        if (userData.userId) {
          setIsLoggedIn(true);
          setUserId(userData.userId)
        } else {
          setIsLoggedIn(false);
          setUserId(null)
        }
      })
    } else {
      setIsLoggedIn(false);
      setUserId(null)
    }
  }, [token])
  const handleLoginSubmit = loginData => {
    console.log("handle login", loginData)
    API.login(loginData).then(data => {
      if (data.token) {
        setToken(data.token)
        localStorage.setItem("token", data.token)
      }
    })
  }
  // const logout = () => {
  //   setToken(null);
  //   localStorage.removeItem("token")
  // }
  return (
    <BrowserRouter>
      <Routes>
        {/* note: intro page should be default but right now its set to HomePage for convenience */}
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/" element={<IntroPage />} />
        <Route path="/login" element={<Login login={handleLoginSubmit} />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/hats" element={<HatStore />} />
      </Routes>
    </BrowserRouter>
    // <Homepage />
  )
}

export default App;