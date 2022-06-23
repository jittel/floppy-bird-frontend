import React from 'react';

import Homepage from '../components/Homepage';
import Logout from '../components/Logout';

import Header from '../components/Header';

export default function Home(props) {
    return (
        <div>
            <Header loggedInData={props.loggedInData} />
            <Logout logout={props.logout} />
            <Homepage loggedInData={props.loggedInData} userId={props.userId}/>
        </div>
    )
}