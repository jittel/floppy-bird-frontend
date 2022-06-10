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

export default function ItemStore() {

    const [itemInfo, setItemInfo] = React.useState();
    const [visible, setVisible] = React.useState(true);
    const [isLoading, setLoading] = React.useState(true);

    React.useEffect(()=> {
        API.getAllItems().then(data => {
            setItemInfo(data.Accessories);
            setLoading(false);
          })
    }, []);

    const handleNestClick = () => {
        setVisible(!visible);
    };

    const purchaseItem = (event) => {
      const accData = event.target.id
  
      const regex = /https:\/\/i\.imgur\.com\//i;
      const result = accData.split(regex)
      const hatName = (result[0])
      const hatUrl = `https://i.imgur.com/${result[1]}`
      console.log(hatName)
      console.log(hatUrl)
  
      if (event.target.id) {
        if (window.confirm(`Are you sure you wish to purchase ${hatName}for 1 Egg?`)) {
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
          <ListItemText primary="Items" />
          {visible ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
        { !visible && <Collapse in={!visible} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {itemInfo.map((item) => (
                <ListItemButton sx={{ pl: 2 }} key={item.id}>
                    <ListItemAvatar>
                        <Avatar
                            alt={item.accessory_name}
                            src={item.accessory_zoom}
                            sx={{ width: 56, height: 56 }}
                            />
                        </ListItemAvatar>
                    <ListItemText 
                        primary={item.accessory_name}
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
                                {item.accessory_price}
                            </React.Fragment>
                        }
                        />
                        <ListItem onClick={purchaseItem} id={item.accessory_name + item.accessory_zoom}
                secondaryAction={
                  <IconButton id={item.accessory_name + item.accessory_zoom} edge="end" aria-label="delete" >
                    <AttachMoneyIcon id={item.accessory_name + item.accessory_zoom} />
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