import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './style.css'

import HatsOwned from '../HatsOwned';
import ItemsOwned from '../ItemsOwned';
import ShoesOwned from '../ShoesOwned';


const drawerWidth = 280;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

export default function Store(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
     
      <Box open={open}>
        <DrawerHeader />
      </Box>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'ltr' ? <ChevronRightIcon className='custom-arrow' /> : <ChevronLeftIcon className='custom-arrow' />}
          </IconButton>
          <Typography className='dresser-title' variant="h5" noWrap sx={{ flexGrow: 1, mr:1 }} component="div">
              My Accessories
          </Typography>
        </DrawerHeader>
        <Divider />
        <HatsOwned loggedInData={props.loggedInData} />
        <ShoesOwned />
        <ItemsOwned />
      </Drawer>

      <Toolbar className='custom-tool'>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
              my stuff
          </Typography>
          <IconButton
            className='custom-menuIcon'
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{ ml: 1, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
    </Box>
  );
}
