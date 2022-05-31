import React from 'react';

export default function signup() {
    return(
        <div>
            <section className='pagecard'>
                <input id='newUser'>Username</input>
                <input id='newPassword'>Password</input>
                <input id='passwordConfirm'>Confirm Password</input>
                <input id='chickenName'>Name yo bird!</input>
            </section>
        </div>
    )
}