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

export default function ItemsOwned(props) {

    const [itemInfo, setItemInfo] = React.useState();
    const [visible, setVisible] = React.useState(true);
    const [isLoading, setLoading] = React.useState(true);

    React.useEffect(()=> {
        API.getOneUser(props.loggedInData.id).then(data => {
            setItemInfo(data.Accessories);
            // console.log("ACCESSORY DATA", data)
            setLoading(false);
          })
    }, []);

    const handleNestClick = () => {
        setVisible(!visible);
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
                </ListItemButton>
            ))}
          </List>
        </Collapse>}
      </List>
    );
  }