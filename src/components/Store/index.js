import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function Store() {
    return(
        <div className='accCard' id='storeCard'>
            <button className='accBtn' id='hatsBtn'>Hats!</button>
            <button className='accBtn' id='clothesBtn'>Clothes!</button>
            <button className='accBtn' id='shoesBtn'>Shoes!</button>
            <button className='accBtn' id='enviroBtn'>Enviroments!</button>
        </div>
    )
}