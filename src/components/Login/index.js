import React, { useState, useEffect } from 'react';
import './Style.css'
import {
    useNavigate
  } from "react-router-dom";

export default function Login(props) {
    let navigate = useNavigate();


    const [loggedIn, setLoggedIn] = useState(false)
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    const loginSubmit = e => {
        e.preventDefault();
        props.login(loginData);
        if (loginData) {
            setLoggedIn(true)
        }
        setLoginData({
            username: "",
            password: ""
        })
        // window.location.replace('/homepage')
        navigate('/homepage', {replace:true})
    }

    return (
        <div className='btns'>
            {/* <section className='pagecard'>
                <input id='username-input' type='text' placeholder='Username'></input>
                <input id='password-input' type='text' placeholder='Password'></input>
                <a href="/Homepage"><button className='submitButton'>Submit</button></a>
            </section> */}
            <form onSubmit={loginSubmit}>
                <input value={loginData.username} type="text" name="loginUsername" placeholder="username" onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} />
                <input value={loginData.password} type="password" name="loginPassword" onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                <button className='submitButton'>Login</button>
            </form>
        </div>
    )
}