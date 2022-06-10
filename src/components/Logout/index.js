import React from 'react';
import './style.css';

export default function Logout(props) {
    console.log(props)
    return (
        <div>
            <button className='logoutBtn' onClick={props.logout}>Logout</button>
        </div>
    )
}