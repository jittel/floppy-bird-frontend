import React from 'react';

export default function Logout(props) {
    console.log(props)
    return (
        <div>
            <button onClick={props.logout}>Logout</button>
        </div>
    )
}