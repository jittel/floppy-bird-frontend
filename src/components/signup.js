import React from 'react';

export default function Signup() {
    return(
        <div>
            <section className='pagecard'>
                <input id='newUser'></input>
                <input id='newPassword'></input>
                <input id='passwordConfirm'></input>
                <input id='chickenName'></input>
                <button id='submitButton'>Submit</button>
            </section>
        </div>
    )
}