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

export default function ItemsOwned(props) {

  const [itemInfo, setItemInfo] = React.useState();
  const [visible, setVisible] = React.useState(true);
  const [isLoading, setLoading] = React.useState(true);

  function checkItem(num) {
    return num.CategoryId == 2;
  }

  React.useEffect(() => {
    async function getItems() {
      API.getOneUser(props.loggedInData.id).then(res => {
        console.log(res)
        return res.json()
      }).then(data => {
        const itemResult = data.Accessories.filter(checkItem)
        setItemInfo(itemResult)
        setLoading(false)
        // console.log(itemInfo)
      })
    }
    getItems()
  }, [isLoading]);

  const handleNestClick = () => {
    setVisible(!visible);
  };

  const changeItem = (event) => {
    const accData = event.target.id
    const result = accData.split(",")
    const itemName = (result[0])
    const itemUrl = result[1]
    console.log(itemUrl)
    if (event.target.id) {
      if (window.confirm(`Are you sure you wish to equip ${itemName}`)) {
        console.log('equip function')
        //Async await the users egg data and inventory data.
        //Subtract 1 Egg from user data and put itemName into accessory data
        API.changeItem(props.loggedInData.id, itemUrl).then(() => {
          console.log("item changed")
        })
      }
    }
  };

  if (isLoading) {
    return <div>Loading</div>
  } else {
    return (
      <List>
        <ListItemButton onClick={handleNestClick}>
          <ListItemText primary="Items" />
          {visible ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
        {!visible && <Collapse in={!visible} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {itemInfo && itemInfo.map((item) => (
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
                <ListItem onClick={changeItem} id={item.accessory_name + " , " + item.accessory_img}
                  secondaryAction={
                    <IconButton id={item.accessory_name + " , " + item.id} edge="end" aria-label="delete" >
                      <AttachMoneyIcon id={item.accessory_name + " , " + item.id} />
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
}