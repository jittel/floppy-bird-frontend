import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import API from "../../utils/API";
import { Typography } from '@mui/material';

export default function HatStore() {

  const [hatInfo, setHatInfo] = React.useState();
  const [visible, setVisible] = React.useState(true);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    API.getAllHats().then(data => {
      setHatInfo(data.Accessories);
      setLoading(false);
    })
  }, []);

  const handleNestClick = () => {
    setVisible(!visible);
  };

  const purchaseHat = (event) => {
    const accData = event.target.id

    const regex = /https:\/\/i\.imgur\.com\//i;
    const result = accData.split(regex)
    const hatName = (result[0])
    const hatUrl = `https://i.imgur.com/${result[1]}`
    console.log(hatName)
    console.log(hatUrl)

    if (event.target.id) {
      if (window.confirm(`Are you sure you wish to purchase ${hatName} for 10 eggs?`)) {
        console.log('purchase function')
        //Async await the users egg data and inventory data. 
        //Subtract 1 Egg from user data and put hatName into accessory data
      }
    }
  };

  if (isLoading) {
    return <div>Loading</div>
  }

  return (
    <List>
      <ListItemButton onClick={handleNestClick}>
        <ListItemText primary="Hats" />
        {visible ? <ExpandMore /> : <ExpandLess />}
      </ListItemButton>
      {!visible && <Collapse in={!visible} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {hatInfo.map((hat) => (
            <ListItemButton sx={{ pl: 2 }} key={hat.id} >
              <ListItemAvatar >
                <Avatar
                  alt={hat.accessory_name}
                  src={hat.accessory_zoom}
                  sx={{ width: 56, height: 56, mr: 1 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={hat.accessory_name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline', mr: .5 }}
                      component="span"
                      variant="caption"
                      color="text.primary"
                    >
                      Price: 
                    </Typography>
                    {hat.accessory_price}
                    <Typography
                      sx={{ display: 'inline', ml: .5 }}
                      component="span"
                      variant="caption"
                      color="text.primary"
                    >
                      eggs 
                    </Typography>
                  </React.Fragment>
                }
              />
              <ListItem onClick={purchaseHat} id={hat.accessory_name + hat.accessory_zoom}
                secondaryAction={
                  <IconButton id={hat.accessory_name + hat.accessory_zoom} edge="end" aria-label="delete" >
                    <AttachMoneyIcon id={hat.accessory_name + hat.accessory_zoom} />
                  </IconButton>
                }
              ></ListItem>
            </ListItemButton>
          ))}
        </List>
      </Collapse>}
    </List>
  );
}