import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Homepage from "./components/Homepage";
import IntroPage from "./components/IntroPage";
import Signup from "./components/Signup";
import Store from "./components/Store";
import Pages from "./components/Pages";


import API from '../src/utils/API'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const AuthorizationContext = React.createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null)
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      API.verify(savedToken).then(userData => {
        if (userData.userId) {
          setToken(savedToken)
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
  }, [])
  const handleLoginSubmit = loginData => {
    console.log("handle login", loginData)
    API.login(loginData).then(data => {
      if (data.token) {
        setToken(data.token)
        localStorage.setItem("token", data.token)
        window.location.replace('/homepage')
      }
    })
  }
  // const logout = () => {
  //   setToken(null);
  //   localStorage.removeItem("token")
  // }
  console.log(token)
  return (
    <AuthorizationContext.Provider value={token}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/homepage" element={<Pages />} />
          <Route path="/login" element={<Login login={handleLoginSubmit} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/store" element={<Store />} />
          {/* <Route path="/store/hats" element={<HatStore />} /> */}
        </Routes>
      </BrowserRouter>
    </AuthorizationContext.Provider>
  )
}

export default App;