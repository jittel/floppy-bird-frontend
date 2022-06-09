import React, { Component} from 'react';

export default function createEgg() {
    
    return React.createElement(
       "img",
       {src: "../assets/egg.jpg"},
       null
    )
};