import React from 'react';
import Store from '../components/Store';
import Homepage from '../components/Homepage';
import Logout from '../components/Logout';

export default function Home(props) {
    return (
        <div>
            <Store />
            <Logout logout={props.logout} />
            <Homepage />
        </div>
    )
}