import React from 'react';
import './Style.css'

export default function IntroPage() {
    return(
        <div className='btns'>
            <a  href="/login"><button id='login-button'>Checking on my Chicken! Login</button></a>
            {/* <button id='signup-button' href="/Signup">I'm new here! Signup</button> */}
        </div>
    )
}