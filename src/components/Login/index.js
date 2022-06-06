import React, {useState } from 'react';
import './Style.css'

export default function Login(props) {

    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    const loginSubmit = e => {
        e.preventDefault();
        props.login(loginData);
        setLoginData({
            username: "",
            password: ""
        })
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
                <a href="/Homepage"><button className='submitButton'>Login</button></a>
            </form>
        </div>
    )
}