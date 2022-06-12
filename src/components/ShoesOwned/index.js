import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

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
        console.log("shoe info", shoeInfo)
      })
    }
    getShoes()
  }, [isLoading]);

  const handleNestClick = () => {
    setVisible(!visible);
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
                    sx={{ width: 56, height: 56 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={shoe.accessory_name}
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
                      {shoe.accessory_price}
                    </React.Fragment>
                  }
                />
              </ListItemButton>
            ))}
          </List>
        </Collapse>}
      </List>
    );
  }
}