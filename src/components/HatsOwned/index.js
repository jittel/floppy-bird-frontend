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

export default function HatsOwned() {

  const [hatInfo, setHatInfo] = React.useState([]);
  const [visible, setVisible] = React.useState(true);
  const [isLoading, setLoading] = React.useState(true);

  const userID = JSON.parse(localStorage.getItem("user data"))

  React.useEffect(() => {
    async function getStuff() {
      API.getOneUser(userID.id).then(res=>{
        console.log(res)
        return res.json()
      }).then(data => {
        data.Accessories.forEach(element => {
          if (element.CategoryId === 1) {
            setHatInfo([element]);
            setLoading(false);
            console.log("hat info", hatInfo)
          }
        });
      })
    }
    getStuff()
  }, []);

  const handleNestClick = () => {
    setVisible(!visible);
  };

  const purchaseHat = (event) => {
    const hatName = event.target.id
    console.log(hatName)
    if (event.target.id) {
      if (window.confirm(`Are you sure you wish to purchase ${hatName} for 1 Egg?`)) {
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
          {hatInfo && hatInfo.map((hat) => (
            <ListItemButton sx={{ pl: 2 }} key={hat.id} >
              <ListItemAvatar >
                <Avatar
                  alt={hat.accessory_name}
                  src={hat.accessory_zoom}
                  sx={{ width: 56, height: 56 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={hat.accessory_name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="caption"
                      color="text.primary"
                    >
                      Price:
                    </Typography>
                    {hat.accessory_price}
                  </React.Fragment>
                }
              />
              <ListItem onClick={purchaseHat} id={hat.accessory_name}
                secondaryAction={
                  <IconButton id={hat.accessory_name} edge="end" aria-label="delete" >
                    <AttachMoneyIcon id={hat.accessory_name} />
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