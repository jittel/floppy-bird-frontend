import React from 'react';
import { motion } from "framer-motion";
import './Style.css'
import logo from '../assets/floppybird_name_crop.png';

export default function IntroPage() {
    return (
        <div className='btns'>
            <motion.img initial={{ scale: 0.5, opacity: 0.5 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1, type: 'spring', bounce: 0.5 }} src={logo} alt='floppy bird logo' className='introLogo'></motion.img>
            <a  href="/login"><motion.button initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, duration: 0.3, type: 'spring', bounce: 3 }} id='login-button'>Checking on my Chicken! Login</motion.button></a>
            <br></br>
            <a href="/signup"><motion.button initial={{ scale: 0.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.5, duration: 0.3, type: 'spring', bounce: 3 }} id='signup-button'>I'm new here! Signup</motion.button></a>
        </div>
    )
}