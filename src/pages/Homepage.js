import React from 'react';
import Store from '../components/Store';
import Homepage from '../components/Homepage';
import Logout from '../components/Logout';

export default function Home(props) {
    // const userData = localStorage.getItem("user data")
    // let userObj = JSON.parse(userData)
    // console.log("----->", userObj.eggs)
    return (
        <div>
            <Store />
            <Logout logout={props.logout} />
            <Homepage loggedInData={props.loggedInData} userId={props.userId}/>
        </div>
    )
}