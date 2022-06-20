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

export default function ShoeStore(props) {

  const [shoeInfo, setShoeInfo] = React.useState();
  const [visible, setVisible] = React.useState(true);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    API.getAllShoes().then(data => {
      setShoeInfo(data.Accessories);
      setLoading(false);
    })
  }, []);

  const handleNestClick = () => {
    setVisible(!visible);
  };

  const purchaseShoe = (event) => {
    const accData = event.target.id
    const result = accData.split(",")
    const shoeName = (result[0])
    const shoeId = result[1]
    console.log(shoeName)

    if (event.target.id) {
      if (window.confirm(`Are you sure you wish to purchase ${shoeName} for 15 eggs?`)) {
        console.log('purchase function')
        //Async await the users egg data and inventory data. 
        //Subtract 1 Egg from user data and put shoeName into accessory data
        API.addAccessory(props.loggedInData.id, shoeId).then(() => {
          console.log(`added shoe with id of ${shoeId}`)
        })
      }
    }
  };

  if (isLoading) {
    return <div>Loading</div>
  }

  return (
    <List>
      <ListItemButton onClick={handleNestClick}>
        <ListItemText primary="Shoes" />
        {visible ? <ExpandMore /> : <ExpandLess />}
      </ListItemButton>
      {!visible && <Collapse in={!visible} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {shoeInfo.map((shoe) => (
            <ListItemButton sx={{ pl: 2 }} key={shoe.id}>
              <ListItemAvatar>
                <Avatar
                  alt={shoe.accessory_name}
                  src={shoe.accessory_zoom}
                  sx={{ width: 56, height: 56, mr: 1 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={shoe.accessory_name}
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
                    {shoe.accessory_price}
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
              <ListItem onClick={purchaseShoe} id={shoe.accessory_name + "," + shoe.id}
                secondaryAction={
                  <IconButton id={shoe.accessory_name + "," + shoe.id} edge="end" aria-label="delete" >
                    <AttachMoneyIcon id={shoe.accessory_name + "," + shoe.id} />
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