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

import API from "../../utils/API";
import { Typography } from '@mui/material';

export default function ShoeStore() {

    const [shoeInfo, setShoeInfo] = React.useState();
    const [visible, setVisible] = React.useState(true);
    const [isLoading, setLoading] = React.useState(true);

    React.useEffect(()=> {
        API.getAllShoes().then(data => {
            setShoeInfo(data.Accessories);
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
          <ListItemText primary="Shoes" />
          {visible ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
        { !visible && <Collapse in={!visible} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {shoeInfo.map((shoe) => (
                <ListItemButton sx={{ pl: 2 }} key={shoe.id}>
                    <ListItemAvatar>
                        <Avatar
                            alt={shoe.accessory_name}
                            src={shoe.accessory_img}
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