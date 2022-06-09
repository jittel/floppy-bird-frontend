import * as React from 'react';
import Store from '../Store';
import Accessories from '../Accessories';
import './style.css';

export default function Header() {
    return (
        <div className='custom-nav'>
            <Store />
            <Accessories />
        </div>
    )
}