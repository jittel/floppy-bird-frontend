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

import shoes from "../assets/shoes/index.js";

export default function ShoeStore() {

  const [visible, setVisible] = React.useState(true);
  const handleNestClick = () => {
    setVisible(!visible);
  };

  return (
    <List>
      <ListItemButton onClick={handleNestClick}>
        <ListItemText primary="Shoes" />
          {visible ? <ExpandMore /> : <ExpandLess />}
      </ListItemButton>
      <Collapse in={!visible} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl:2 }}>
            <ListItemAvatar>
              <Avatar 
                alt="basketball shoes" 
                src={shoes.basketball_shoes} 
                sx={{ width: 56, height: 56 }}
                />
            </ListItemAvatar>
            <ListItemText primary="Basketball Shoes"/>
          </ListItemButton>
          <ListItemButton sx={{ pl:2 }}>
            <ListItemAvatar>
              <Avatar 
                alt="boots with the fur" 
                src={shoes.boots_with_the_fur} 
                sx={{ width: 56, height: 56 }}
                />
            </ListItemAvatar>
            <ListItemText primary="Boots with the Fur"/>
          </ListItemButton>
          <ListItemButton sx={{ pl:2 }}>
            <ListItemAvatar>
              <Avatar 
                alt="cowboy boots" 
                src={shoes.cowboy_boots} 
                sx={{ width: 56, height: 56 }}
                />
            </ListItemAvatar>
            <ListItemText primary="Cowboy Boots"/>
          </ListItemButton>
          <ListItemButton sx={{ pl:2 }}>
            <ListItemAvatar>
              <Avatar 
                alt="crocs" 
                src={shoes.crocs} 
                sx={{ width: 56, height: 56 }}
                />
            </ListItemAvatar>
            <ListItemText primary="Crocs"/>
          </ListItemButton>
          <ListItemButton sx={{ pl:2 }}>
            <ListItemAvatar>
              <Avatar 
                alt="platforms" 
                src={shoes.platform} 
                sx={{ width: 56, height: 56 }}
                />
            </ListItemAvatar>
            <ListItemText primary="Platforms"/>
          </ListItemButton>
          <ListItemButton sx={{ pl:2 }}>
            <ListItemAvatar>
              <Avatar 
                alt="slides" 
                src={shoes.slides} 
                sx={{ width: 56, height: 56 }}
                />
            </ListItemAvatar>
            <ListItemText primary="Slides"/>
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}