import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

        // <div className='accCard' id='storeCard'>
        //     <button className='accBtn' id='hatsBtn'>Hats!</button>
        //     <button className='accBtn' id='clothesBtn'>Clothes!</button>
        //     <button className='accBtn' id='shoesBtn'>Shoes!</button>
        //     <button className='accBtn' id='enviroBtn'>Enviroments!</button>
        // </div>

export default function Store() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx = {{ width: 250 }}
            role = 'presentation'
            onClick = { toggleDrawer(anchor, false) }
            onKeyDown = { toggleDrawer(anchor, false) }
        >
            <List>
                {['Hats', 'Clothes', 'Shoes', 'Environment'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>    
    );

    return (
        <div>
        {['store'].map((anchor) => (
            <React.Fragment key={anchor}>
                <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                <Drawer
                    anchor = {anchor}
                    open = {state[anchor]}
                    onClose = {toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>
            </React.Fragment>
        ))}
        </div>
    );
}