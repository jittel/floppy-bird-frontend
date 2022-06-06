import React from 'react';
import './Style.css'

export default function IntroPage() {
    return(
        <div className='btns'>
            <a  href="/login"><button id='login-button'>Checking on my Chicken! Login</button></a>
            <a href="/signup"><button id='signup-button'>I'm new here! Signup</button></a>
        </div>
    )
}