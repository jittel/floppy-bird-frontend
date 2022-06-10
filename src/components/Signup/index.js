import React, { useState } from 'react';
import './Style.css'
import API from "../../utils/API"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import logo from '../assets/floppybird_name_crop.png';

export default function Signup() {

    const [signup, setSignup] = useState({
        username: "",
        password: "",
        chicken_name: ""
    })

    const handleInputChange = event => {
        const { name, value } = event.target;
        setSignup({
            ...signup,
            [name]: value
        });
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        API.signup(signup)
          .then(res => {
            // what to do with response data
            console.log(res.data);
            window.location = "/";
          })
          .catch(err => {
            console.log(err);
          });
      };

    return (
        <Box
            component="form"
            onSubmit={handleFormSubmit}
            className='customFormBox'
        >
            <img src={logo} alt='floppy bird logo' className='introLogo'></img>
            <FormControl>
                <TextField 
                    className='custom-input'
                    variant='outlined'
                    color='secondary'
                    id='username'
                    name="username"
                    label="username"
                    type="text"
                    onChange={handleInputChange}
                ></TextField>
            </FormControl>
            <br></br>
            <FormControl>
                <TextField 
                    className='custom-input'
                    variant='outlined'
                    color='secondary'
                    id='password'
                    name="password"
                    label="password"
                    type="text"
                    onChange={handleInputChange}
                ></TextField>
            </FormControl>
            <br></br>
            <FormControl>
                <TextField 
                    className='custom-input'
                    variant='outlined'
                    color='secondary'
                    id='passwordConfirm'
                    // name="password"
                    label="confirm password"
                    type="text"
                    onChange={handleInputChange}
                ></TextField>
            </FormControl>
            <br></br>
            <FormControl>
                <TextField 
                    className='custom-input'
                    variant='outlined'
                    color='secondary'
                    id='chickenName'
                    name="chicken_name"
                    label="name your chicken!"
                    type="text"
                    onChange={handleInputChange}
                ></TextField>
            </FormControl>
            <br></br>
            <button className='submitButton' href="/" >Submit</button>
        </Box>
    )
}

{/* <div>
            <form onSubmit={handleFormSubmit}>
                <section className='pagecard'>
                    <input id='username' name='username' type='text' placeholder='Username' onChange={handleInputChange}></input>

                    <input id='password' name='password' type='text' placeholder='Password' onChange={handleInputChange}></input>

                    <input id='passwordConfirm' type='text' placeholder='Confirm Password' onChange={handleInputChange}></input>

                    <input id='chickenName' name='chicken_name' type='text' placeholder='Name Your chicken!' onChange={handleInputChange}></input>
                    <button className='submitButton' href="/">Submit</button>
                </section>
            </form>
        </div> */}