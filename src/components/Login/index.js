import React, { useState, useEffect } from 'react';
import './Style.css'
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import logo from '../assets/floppybird_name_crop.png';


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
        navigate('/homepage', {replace:true})
    }

    return (
        <Box
            component="form"
            className='customFormBox'
            onSubmit={loginSubmit}
        >
            <img src={logo} alt='floppy bird logo' className='introLogo'></img>
            <FormControl>
                <TextField 
                    className='custom-input'
                    variant='outlined'
                    color='secondary'
                    value={loginData.username}
                    name="loginUsername"
                    label="username"
                    type="text"
                    onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                ></TextField>
            </FormControl>
            <br></br>
            <FormControl>
                <TextField 
                    className='custom-input'
                    variant='outlined'
                    color='secondary'
                    value={loginData.password}
                    name="loginPassword"
                    label="password"
                    type="password"
                    onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                ></TextField>
            </FormControl>
            <br></br>
            <button className='submitButton' >Login</button>
        </Box>
    )
}

{/* <div className='btns'>
            <form onSubmit={loginSubmit} className='customForm'>
                <input value={loginData.username} type="text" name="loginUsername" placeholder="username" onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} />

                <input value={loginData.password} type="password" name="loginPassword" onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                <button className='submitButton'>Login</button>
            </form>
        </div> */}