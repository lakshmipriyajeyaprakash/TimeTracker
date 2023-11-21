import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
//import Drawer from '@mui/material/Drawer';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
//import AdbIcon from '@mui/icons-material/Adb';
import classes from '../Layout/Header.module.css';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position='static' className={classes.appbar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          <svg 
          width="100px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 134 33"
          fill="none"
          class="pointer"
          >
          <path
            d="M14.4 9.79995L20 4.19995L21.6 5.79995L16 11.4L14.4 9.79995ZM12.1 15.6C11 15.6 10.1 14.7 10.1 13.6C10.1 
            12.5 11 11.6 12.1 11.6C13.2 11.6 14.1 12.5 14.1 13.6C14.1 14.7 13.2 15.6 12.1 15.6ZM21.7 21.4L20.1 23L14.5 
            17.4L16.1 15.7999L21.7 21.4Z"
            fill="#222222"
            class="cl-logo-hands"
          ></path>
          <path
            d="M124.7 29.1C124.2 30.3 123.4 31.2 122.5 31.9C121.5 32.6 120.5 32.9 119.3 32.9C117.7 32.9 116.2 32.3 114.8
             31.1L116.5 28C117.3 28.7 118.1 29.1 119 29.1C119.8 29.1 120.5 28.8 121.1 28.2C121.6 27.6 121.9 26.9 121.9 
             26.2C121.9 25.9 119.5 19.7 114.6 7.7H118.7L124.1 21L129.5 7.7H133.6L124.7 29.1ZM110.8 3.4C110 3.4 109.4 
             3.7 108.9 4.2C108.4 4.7 108.2 5.4 108.2 6.2V7.7H112.9V10.7H108.2V25.7H104.4V10.7H102.1V7.7H104.4V6.3C104.4 
             4.4 105 2.9 106.1 1.8C107.2 0.699999 108.6 0.100002 110.2 0.100002C111.8 0.100002 113.3 0.700001 114.6 
             1.9L113 4.6C112.3 3.8 111.6 3.4 110.8 3.4ZM96.2 4.8C95.5 4.8 95 4.6 94.5 4.1C94 3.6 93.8 3.1 93.8 2.4C93.8 
             1.7 94 1.2 94.5 0.700001C95 0.200001 95.5 0 96.2 0C96.9 0 97.4 0.200001 97.9 0.700001C98.4 1.2 98.6 1.7 
             98.6 2.4C98.6 3.1 98.4 3.6 97.9 4.1C97.5 4.6 96.9 4.8 96.2 4.8ZM86.4 25.7L81.1 17.8L78.4 
             20.6V25.7H74.6V0.600002H78.4V15.3L85.7 7.7H90.6L83.8 14.8L91.1 25.7H86.4V25.7ZM65.4 22.5C66.3
             22.5 67.2 22.3 68 21.8L70.4 24.2C68.7 25.3 66.8 25.9 64.8 25.9C62.3 25.9 60.1 25 58.3 23.3C56.5 21.6 55.6 
             19.4 55.6 16.6C55.6 13.8 56.5 11.6 58.4 9.9C60.3 8.2 62.6 7.3 65.3 7.3C67.1 7.3 68.8 7.7 70.2 8.6L67.5 
             11.3C66.7 11 66 10.8 65.2 10.8C63.6 10.8 62.3 11.3 61.1 12.4C59.9 13.4 59.4 14.8 59.4 16.5C59.4 18.2 60 
             19.6 61.1 20.7C62.3 21.9 63.7 22.5 65.4 22.5ZM43.1 26C40.4 26 38.1 25.1 36.3 23.3C34.5 21.5 33.6 19.3 
             33.6 16.7C33.6 14.1 34.5 11.9 36.3 10.1C38.1 8.3 40.4 7.4 43.1 7.4C45.8 7.4 48.1 8.3 49.9 10.1C51.7 
             11.9 52.6 14.1 52.6 16.7C52.6 19.3 51.7 21.5 49.9 23.3C48.1 25.1 45.8 26 43.1 26ZM47.2 12.4C46.1 11.3 
             44.8 10.8 43.1 10.8C41.5 10.8 40.1 11.3 39 12.4C37.9 13.5 37.4 14.9 37.4 16.6C37.4 18.3 37.9 19.8 39 
             20.8C40.1 21.9 41.4 22.4 43.1 22.4C44.7 22.4 46.1 21.9 47.2 20.8C48.3 19.7 48.8 18.3 48.8 16.6C48.8 15 
             48.3 13.5 47.2 12.4ZM25.9 0.600002H29.7V25.7H25.9V0.600002ZM12.2 22.2C13.3 22.2 14.4 22 15.4 21.6L18.2 
             24.4C16.4 25.4 14.4 25.9 12.3 25.9C5.5 25.9 0 20.4 0 13.6C0 6.8 5.5 1.3 12.3 1.3C14.5 1.3 16.5 1.9 18.2 
             2.8L15.5 5.5C14.5 5.1 13.4 4.9 12.3 4.9C7.5 4.9 3.7 8.8 3.7 13.5C3.6 18.3 7.4 22.2 12.2 22.2ZM98.1 
             25.7H94.3V7.7H98.1V25.7Z"
            fill="#03A9F4"
          ></path>
        </svg>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <svg 
          width="100px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 134 33"
          fill="none"
          class="pointer"
          >
          <path
            d="M14.4 9.79995L20 4.19995L21.6 5.79995L16 11.4L14.4 9.79995ZM12.1 15.6C11 15.6 10.1 14.7 10.1 13.6C10.1 
            12.5 11 11.6 12.1 11.6C13.2 11.6 14.1 12.5 14.1 13.6C14.1 14.7 13.2 15.6 12.1 15.6ZM21.7 21.4L20.1 23L14.5 
            17.4L16.1 15.7999L21.7 21.4Z"
            fill="#222222"
            class="cl-logo-hands"
          ></path>
          <path
            d="M124.7 29.1C124.2 30.3 123.4 31.2 122.5 31.9C121.5 32.6 120.5 32.9 119.3 32.9C117.7 32.9 116.2 32.3 114.8
             31.1L116.5 28C117.3 28.7 118.1 29.1 119 29.1C119.8 29.1 120.5 28.8 121.1 28.2C121.6 27.6 121.9 26.9 121.9 
             26.2C121.9 25.9 119.5 19.7 114.6 7.7H118.7L124.1 21L129.5 7.7H133.6L124.7 29.1ZM110.8 3.4C110 3.4 109.4 
             3.7 108.9 4.2C108.4 4.7 108.2 5.4 108.2 6.2V7.7H112.9V10.7H108.2V25.7H104.4V10.7H102.1V7.7H104.4V6.3C104.4 
             4.4 105 2.9 106.1 1.8C107.2 0.699999 108.6 0.100002 110.2 0.100002C111.8 0.100002 113.3 0.700001 114.6 
             1.9L113 4.6C112.3 3.8 111.6 3.4 110.8 3.4ZM96.2 4.8C95.5 4.8 95 4.6 94.5 4.1C94 3.6 93.8 3.1 93.8 2.4C93.8 
             1.7 94 1.2 94.5 0.700001C95 0.200001 95.5 0 96.2 0C96.9 0 97.4 0.200001 97.9 0.700001C98.4 1.2 98.6 1.7 
             98.6 2.4C98.6 3.1 98.4 3.6 97.9 4.1C97.5 4.6 96.9 4.8 96.2 4.8ZM86.4 25.7L81.1 17.8L78.4 
             20.6V25.7H74.6V0.600002H78.4V15.3L85.7 7.7H90.6L83.8 14.8L91.1 25.7H86.4V25.7ZM65.4 22.5C66.3
             22.5 67.2 22.3 68 21.8L70.4 24.2C68.7 25.3 66.8 25.9 64.8 25.9C62.3 25.9 60.1 25 58.3 23.3C56.5 21.6 55.6 
             19.4 55.6 16.6C55.6 13.8 56.5 11.6 58.4 9.9C60.3 8.2 62.6 7.3 65.3 7.3C67.1 7.3 68.8 7.7 70.2 8.6L67.5 
             11.3C66.7 11 66 10.8 65.2 10.8C63.6 10.8 62.3 11.3 61.1 12.4C59.9 13.4 59.4 14.8 59.4 16.5C59.4 18.2 60 
             19.6 61.1 20.7C62.3 21.9 63.7 22.5 65.4 22.5ZM43.1 26C40.4 26 38.1 25.1 36.3 23.3C34.5 21.5 33.6 19.3 
             33.6 16.7C33.6 14.1 34.5 11.9 36.3 10.1C38.1 8.3 40.4 7.4 43.1 7.4C45.8 7.4 48.1 8.3 49.9 10.1C51.7 
             11.9 52.6 14.1 52.6 16.7C52.6 19.3 51.7 21.5 49.9 23.3C48.1 25.1 45.8 26 43.1 26ZM47.2 12.4C46.1 11.3 
             44.8 10.8 43.1 10.8C41.5 10.8 40.1 11.3 39 12.4C37.9 13.5 37.4 14.9 37.4 16.6C37.4 18.3 37.9 19.8 39 
             20.8C40.1 21.9 41.4 22.4 43.1 22.4C44.7 22.4 46.1 21.9 47.2 20.8C48.3 19.7 48.8 18.3 48.8 16.6C48.8 15 
             48.3 13.5 47.2 12.4ZM25.9 0.600002H29.7V25.7H25.9V0.600002ZM12.2 22.2C13.3 22.2 14.4 22 15.4 21.6L18.2 
             24.4C16.4 25.4 14.4 25.9 12.3 25.9C5.5 25.9 0 20.4 0 13.6C0 6.8 5.5 1.3 12.3 1.3C14.5 1.3 16.5 1.9 18.2 
             2.8L15.5 5.5C14.5 5.1 13.4 4.9 12.3 4.9C7.5 4.9 3.7 8.8 3.7 13.5C3.6 18.3 7.4 22.2 12.2 22.2ZM98.1 
             25.7H94.3V7.7H98.1V25.7Z"
            fill="#03A9F4"
          ></path>
        </svg>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;