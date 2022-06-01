import React from 'react';

export default function Login() {
    return(
        <div>
            <section className='pagecard'>
                <input id='username-input' type='text' placeholder='Username'></input>
                <input id='password-input' type='text' placeholder='Password'></input>
                <button className='submitButton'>Submit</button>
            </section>
        </div>
    )
}