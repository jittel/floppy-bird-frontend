import React from 'react';
import './Style.css'
import logo from '../assets/floppybird_name_crop.png';

export default function IntroPage() {
    return (
        <div className='btns'>
            <img src={logo} alt='floppy bird logo' className='introLogo'></img>
            <a  href="/login"><button id='login-button'>Checking on my Chicken! Login</button></a>
            <br></br>
            <a href="/signup"><button id='signup-button'>I'm new here! Signup</button></a>
        </div>
    )
}