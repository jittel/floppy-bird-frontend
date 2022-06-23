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

import HatStore from '../HatStore';
import ShoeStore from '../ShoeStore';
import ItemStore from '../ItemStore';


const drawerWidth = 280;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
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

      <Toolbar>
          <IconButton
            className='custom-menuIcon'
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerOpen}
            sx={{ mr: 1, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap sx={{ flexGrow: 1 }} component="div">
              store
          </Typography>
        </Toolbar>

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
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Typography className='store-title' variant="h5" noWrap sx={{ flexGrow: 1, ml:1 }} component="div">
              Accessory Store
          </Typography>
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'ltr' ? <ChevronLeftIcon className='custom-arrow' /> : <ChevronRightIcon className='custom-arrow' />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <HatStore loggedInData={props.loggedInData} />
        <ShoeStore loggedInData={props.loggedInData} />
        <ItemStore loggedInData={props.loggedInData} />
      </Drawer>
    </Box>
  );
}
