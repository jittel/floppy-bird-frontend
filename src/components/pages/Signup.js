import React from 'react';

export default function Signup() {
    return(
        <div>
            <section className='pagecard'>
                <input id='newUser' type='text' placeholder='Username'></input>
                <input id='newPassword' type='text' placeholder='Password'></input>
                <input id='passwordConfirm' type='text' placeholder='Confirm Password'></input>
                <input id='chickenName' type='text' placeholder='Name Your chicken!'></input>
                <button id='submitButton'>Submit</button>
            </section>
        </div>
    )
}