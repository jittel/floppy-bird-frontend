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

import hats from "../assets/hats/index.js";
import API from "../../utils/API";


export default function HatStore() {

  // let hatArray = [];

  const [visible, setVisible] = React.useState(true);
  // const [hatResult, setHatResult] = React.useState([]);
  const handleNestClick = () => {
    API.getAllHats().then(data => {
      // console.log("DATA", data.Accessories)
      // setHatResult(data.Accessories)
      // console.log(hatResult)
      const hatData = data.Accessories;
      // let hatArray = hatData.map((hat) => )
      console.log(hatData[1])
    })
    setVisible(!visible);
  };


  // function getHats(hatData) {
  // API.getAllHats().then(data=> {
  //   if (data) {
  //     setHatResult(data)
  //     console.log(hatResult)
  //   } else {
  //     console.log("NOT WORKING")
  //   }
  // })
  // }

  // const getHats = async () => {
  //   const response = await API.getAllHats();
  //   setHatResult(response)
  // }
  // React.useEffect(()=>{
  //   getHats({});
  // }, [hatResult]);




  return (
    <List>
      <ListItemButton onClick={handleNestClick}>
        <ListItemText primary="Hats" />
        {visible ? <ExpandMore /> : <ExpandLess />}
      </ListItemButton>
      <Collapse in={!visible} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemAvatar>
              <Avatar
                alt="cap"
                src={hats.cap}
                sx={{ width: 56, height: 56 }}
              />
            </ListItemAvatar>
            <ListItemText primary={[]} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemAvatar>
              <Avatar
                alt="cowboy hat"
                src={hats.cowboy}
                sx={{ width: 56, height: 56 }}
              />
            </ListItemAvatar>
            <ListItemText primary="Cowboy Hat" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemAvatar>
              <Avatar
                alt="crown"
                src={hats.crown}
                sx={{ width: 56, height: 56 }}
              />
            </ListItemAvatar>
            <ListItemText primary="Crown" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemAvatar>
              <Avatar
                alt="flower crown"
                src={hats.flower}
                sx={{ width: 56, height: 56 }}
              />
            </ListItemAvatar>
            <ListItemText primary="Flower Crown" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemAvatar>
              <Avatar
                alt="hair"
                src={hats.hair}
                sx={{ width: 56, height: 56 }}
              />
            </ListItemAvatar>
            <ListItemText primary="Hair" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 2 }}>
            <ListItemAvatar>
              <Avatar
                alt="spinny hat"
                src={hats.spinny}
                sx={{ width: 56, height: 56 }}
              />
            </ListItemAvatar>
            <ListItemText primary="Spinny Hat" />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}