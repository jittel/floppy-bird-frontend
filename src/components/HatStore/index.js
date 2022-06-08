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

export default function HatStore() {

    const [hatInfo, setHatInfo] = React.useState();
    const [visible, setVisible] = React.useState(true);
    const [isLoading, setLoading] = React.useState(true);

    React.useEffect(()=> {
        API.getAllHats().then(data => {
            setHatInfo(data.Accessories);
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
          <ListItemText primary="Hats" />
          {visible ? <ExpandMore /> : <ExpandLess />}
        </ListItemButton>
        { !visible && <Collapse in={!visible} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {hatInfo.map((hat) => (
                <ListItemButton sx={{ pl: 2 }} key={hat.id}>
                    <ListItemAvatar>
                        <Avatar
                            alt={hat.accessory_name}
                            src={hat.accessory_img}
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
                </ListItemButton>
            ))}
          </List>
        </Collapse>}
      </List>
    );
  }