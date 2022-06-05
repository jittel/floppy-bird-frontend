import React, { useState } from 'react';
import './Style.css'
import API from "../../utils/API"

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
        <div>
            <form onSubmit={handleFormSubmit}>
                <section className='pagecard'>
                    <input id='username' name='username' type='text' placeholder='Username' onChange={handleInputChange}></input>
                    <input id='password' name='password' type='text' placeholder='Password' onChange={handleInputChange}></input>
                    <input id='passwordConfirm' type='text' placeholder='Confirm Password' onChange={handleInputChange}></input>
                    <input id='chickenName' name='chicken_name' type='text' placeholder='Name Your chicken!' onChange={handleInputChange}></input>
                    <button className='submitButton' href="/">Submit</button>
                </section>
            </form>
        </div>
    )
}