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

export default function ItemStore(props) {

  const [itemInfo, setItemInfo] = React.useState();
  const [visible, setVisible] = React.useState(true);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
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
    const result = accData.split(",")
    const itemName = (result[0])
    const itemId = result[1]
    console.log(itemId)

    if (event.target.id) {
      if (window.confirm(`Are you sure you wish to purchase ${itemName} for 20 eggs?`)) {
        console.log('purchase function')
        API.getOneUser(props.loggedInData.id).then(res=>{
          return res.json();
        }).then(data=>{
          console.log(data)
          API.updateEggs(data.id, (data.eggs - 20)).then(()=>{
            console.log("subracted eggs")
          })
        })
        API.addAccessory(props.loggedInData.id, itemId).then(() => {
          console.log(`added item with id of ${itemId}`)
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
        <ListItemText primary="Items" />
        {visible ? <ExpandMore /> : <ExpandLess />}
      </ListItemButton>
      {!visible && <Collapse in={!visible} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {itemInfo.map((item) => (
            <ListItemButton sx={{ pl: 2 }} key={item.id}>
              <ListItemAvatar>
                <Avatar
                  alt={item.accessory_name}
                  src={item.accessory_zoom}
                  sx={{ width: 56, height: 56, mr: 1 }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.accessory_name}
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
                    {item.accessory_price}
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
              <ListItem onClick={purchaseItem} id={item.accessory_name + "," + item.id}
                secondaryAction={
                  <IconButton id={item.accessory_name + "," + item.id} edge="end" aria-label="delete" >
                    <AttachMoneyIcon id={item.accessory_name + "," + item.id} />
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