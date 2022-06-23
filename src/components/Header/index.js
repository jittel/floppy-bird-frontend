import * as React from 'react';
import Store from '../Store';
import Accessories from '../Accessories';
import './style.css';

export default function Header(props) {
    return (
        <div className='custom-nav'>
            <Store loggedInData={props.loggedInData} />
            <Accessories loggedInData={props.loggedInData} />
        </div>
    )
}