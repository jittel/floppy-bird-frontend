import React from 'react';
import './Style.css'

export default function Login() {
    return(
        <div className='btns'>
            <section className='pagecard'>
                <input id='username-input' type='text' placeholder='Username'></input>
                <input id='password-input' type='text' placeholder='Password'></input>
                <a href="/Homepage"><button className='submitButton'>Submit</button></a>
            </section>
        </div>
    )
}