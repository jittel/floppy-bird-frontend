import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import IntroPage from "./components/IntroPage";
import Signup from "./components/Signup";
import Store from "./components/Store";
import Home from "./pages/Homepage";
import { Helmet } from 'react-helmet';


import API from '../src/utils/API'
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
const AuthorizationContext = React.createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [token, setToken] = useState(null)
  const [loggedInData, setLoggedInData] = useState({
    id: '',
    username: '',
    eggs: 0,
    chicken: {
      name: ''
    }
  })
  // let navigate = useNavigate();
  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken)
    }
  }, [])

  // useEffect(() => {
  //   if (token) {
  //     API.verify(token).then(res => {
  //       console.log("stupid result", res)
  //       // return res.json();
  //     })
  //       .then((userData) => {
  //         console.log("USER DATA", userData)
  //         if (userData.userId) {
  //           setIsLoggedIn(true);
  //           setUserId(userData.userId)
  //         } else {
  //           setIsLoggedIn(false);
  //           setUserId(null)
  //         }
  //       })
  //   } else {
  //     setIsLoggedIn(false);
  //     setUserId(null)
  //   }
  // }, [token])
  useEffect(() => {
    if (token) {
      API.verify(token).then(userData => {
        console.log("data data", userData)
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
        console.log("is this firing", data.user)
        setLoggedInData({
          id: data.user.id,
          username: data.user.username,
          eggs: data.user.eggs,
          chicken: {
            name: data.user.Chicken?.chicken_name
          }
        })
        setToken(data.token)
        localStorage.setItem("token", data.token)
        localStorage.setItem("user data", JSON.stringify(data.user))
      }
    })
  }
  const logout = () => {
    console.log("click")
    setToken(null);
    localStorage.removeItem("token")
    localStorage.removeItem("user data")
  }
  // console.log("LOGGED IN DATA", loggedInData)
  return (
    <AuthorizationContext.Provider value={token}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Floppy Bird</title>
      </Helmet>
      <Routes>
        {/* note: intro page should be default but right now its set to HomePage for convenience */}
        <Route path="/" element={<IntroPage />} />
        <Route path="/homepage" element={<Home userId={userId} loggedInData={loggedInData} logout={logout} />} />
        <Route path="/login" element={<Login login={handleLoginSubmit} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/store" element={<Store />} />
        {/* <Route path="/store/hats" element={<HatStore />} /> */}
      </Routes>
    </AuthorizationContext.Provider>
  )
}

export default App;