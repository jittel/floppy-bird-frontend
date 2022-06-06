import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import arms from "../assets/arms/index.js";

export default function ItemStore() {

  const [visible, setVisible] = React.useState(true);
  const handleNestClick = () => {
    setVisible(!visible);
  };

  return (
    <List>
      <ListItemButton onClick={handleNestClick}>
        <ListItemText primary="Items" />
          {visible ? <ExpandMore /> : <ExpandLess />}
      </ListItemButton>
      <Collapse in={!visible} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:2 }}>
            <ListItemAvatar>
              <Avatar 
                alt="basketball" 
                src={arms.basketball} 
                sx={{ width: 56, height: 56 }}
                />
            </ListItemAvatar>
            <ListItemText primary="Basketball"/>
          </ListItemButton>
          <ListItemButton sx={{ pl:2 }}>
            <ListItemAvatar>
              <Avatar 
                alt="beer" 
                src={arms.beer} 
                sx={{ width: 56, height: 56 }}
                />
            </ListItemAvatar>
            <ListItemText primary="Beer"/>
          </ListItemButton>
          <ListItemButton sx={{ pl:2 }}>
            <ListItemAvatar>
              <Avatar 
                alt="knives" 
                src={arms.knives} 
                sx={{ width: 56, height: 56 }}
                />
            </ListItemAvatar>
            <ListItemText primary="Knives"/>
          </ListItemButton>
          <ListItemButton sx={{ pl:2 }}>
            <ListItemAvatar>
              <Avatar 
                alt="money" 
                src={arms.money} 
                sx={{ width: 56, height: 56 }}
                />
            </ListItemAvatar>
            <ListItemText primary="Money"/>
          </ListItemButton>
          <ListItemButton sx={{ pl:2 }}>
            <ListItemAvatar>
              <Avatar 
                alt="scepter" 
                src={arms.scepter} 
                sx={{ width: 56, height: 56 }}
                />
            </ListItemAvatar>
            <ListItemText primary="Scepter"/>
          </ListItemButton>
          <ListItemButton sx={{ pl:2 }}>
            <ListItemAvatar>
              <Avatar 
                alt="yass nails" 
                src={arms.yas} 
                sx={{ width: 56, height: 56 }}
                />
            </ListItemAvatar>
            <ListItemText primary="Yass Nails"/>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}