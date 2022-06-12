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

export default function ShoesOwned(props) {

  const [shoeInfo, setShoeInfo] = React.useState();
  const [visible, setVisible] = React.useState(true);
  const [isLoading, setLoading] = React.useState(true);

  function checkShoe(num) {
    return num.CategoryId == 3;
  }

  React.useEffect(() => {
    async function getShoes() {
      API.getOneUser(props.loggedInData.id).then(res => {
        console.log(res)
        return res.json()
      }).then(data => {
        const shoeResult = data.Accessories.filter(checkShoe)
        setShoeInfo(shoeResult)
        setLoading(false)
        // console.log("shoe info", shoeInfo)
      })
    }
    getShoes()
  }, [isLoading]);

  const handleNestClick = () => {
    setVisible(!visible);
  };

  const changeShoe = (event) => {
    const accData = event.target.id
    const result = accData.split(",")
    const shoeName = (result[0])
    const shoeUrl = result[1]
    console.log(shoeUrl)
    if (event.target.id) {
      if (window.confirm(`Are you sure you wish to equip ${shoeName}`)) {
        console.log('equip function')
        //Async await the users egg data and inventory data.
        //Subtract 1 Egg from user data and put shoeName into accessory data
        API.changeShoe(props.loggedInData.id, shoeUrl).then(() => {
          console.log("shoe changed")
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
          <ListItemText primary="Shoes" />
          {visible ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
        {!visible && <Collapse in={!visible} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {shoeInfo && shoeInfo.map((shoe) => (
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
                />
                <ListItem onClick={changeShoe} id={shoe.accessory_name + " , " + shoe.accessory_img}
                  secondaryAction={
                    <IconButton id={shoe.accessory_name + " , " + shoe.id} edge="end" aria-label="delete" >
                      <AttachMoneyIcon id={shoe.accessory_name + " , " + shoe.id} />
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