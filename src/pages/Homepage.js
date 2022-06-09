import React from 'react';

import Homepage from '../components/Homepage';
import Logout from '../components/Logout';

import Header from '../components/Header';

export default function Home(props) {
    // const userData = localStorage.getItem("user data")
    // let userObj = JSON.parse(userData)
    // console.log("----->", userObj.eggs)
    return (
        <div>
            <Header />
            <Logout logout={props.logout} />
            <Homepage loggedInData={props.loggedInData} userId={props.userId}/>
        </div>
    )
}