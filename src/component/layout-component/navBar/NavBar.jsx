import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
import logoEN from '../../../assets/enLogo.svg';
import logoAR from '../../../assets/arLogo.svg';
import './style.css';

function NavBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setAnchorElNav(null);
  };

  const handelChangeLanguage = () => {
    setAnchorElNav(null);
    const newLang = lang === 'en' ? 'ar' : 'en';
    changeLanguage(newLang);
  };

  const isTrackingShipmentActive =
    location.pathname === '/shipment-tracking' ||
    /^\/shipment-tracking-details\/\d+$/.test(location.pathname);

  return (
    <AppBar position="static" className={`AppBar ${lang === 'en' ? 'NavRtl' : 'NavLtr'}`}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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
              className="tabs"
            >
              <MenuItem className='menuItem' onClick={() => handleNavigate('/')}>
                <Typography textAlign="center" className={location.pathname === '/' ? 'active' : ''}>
                  {t('home')}
                </Typography>
              </MenuItem>
              <hr className="MuiDivider-root MuiDivider-fullWidth muiltr-39bbo6" />
              <MenuItem className='menuItem' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{t('Price')}</Typography>
              </MenuItem>
              <hr className="MuiDivider-root MuiDivider-fullWidth muiltr-39bbo6" />
              <MenuItem className='menuItem' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{t('Contact_Sales')}</Typography>
              </MenuItem>
              <hr className="MuiDivider-root MuiDivider-fullWidth muiltr-39bbo6" />
              <MenuItem className='menuItem' onClick={() => handleNavigate('/shipment-tracking')}>
                <Typography textAlign="center" className={isTrackingShipmentActive ? 'active' : ''}>
                  {t('Tracking_Shipment')}
                </Typography>
              </MenuItem>
              <hr className="MuiDivider-root MuiDivider-fullWidth muiltr-39bbo6" />
              <MenuItem className='menuItem' onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{t('Sign_in')}</Typography>
              </MenuItem>
              <hr className="MuiDivider-root MuiDivider-fullWidth muiltr-39bbo6" />
              <MenuItem className='menuItem' onClick={handelChangeLanguage}>
                <Typography textAlign="center">{t('English')}</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Box className="flexBox tabsBox">
              <Button
                onClick={handelChangeLanguage}
                sx={{ my: 2, display: 'block' }}
                className="langBtn"
              >
                {t('English')}
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
                className={`tabs marginBtn ${location.pathname === '/sign-in' ? 'active' : ''}`}
              >
                {t('Sign_in')}
              </Button>
              <hr
                className="MuiDivider-root MuiDivider-fullWidth css-9mgopn-MuiDivider-root"
                aria-hidden="true"
              />
              <Button
                onClick={() => handleNavigate('/shipment-tracking')}
                sx={{ my: 2, display: 'block' }}
                className={`tabs marginBtn ${isTrackingShipmentActive ? 'active' : ''}`}
              >
                {t('Tracking_Shipment')}
              </Button>
            </Box>
            <Box className="flexBox">
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
                className={`tabs ${location.pathname === '/contact-sales' ? 'active' : ''}`}
              >
                {t('Contact_Sales')}
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, display: 'block' }}
                className={`tabs ${location.pathname === '/prices' ? 'active' : ''}`}
              >
                {t('Prices')}
              </Button>
              <Button
                onClick={() => handleNavigate('/')}
                sx={{ my: 2, display: 'block' }}
                className={`tabs ${location.pathname === '/' ? 'active' : ''}`}
              >
                {t('home')}
              </Button>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {lang === 'en' ? (
              <img className="logo" onClick={() => handleNavigate('/')} src={logoEN} />
            ) : (
              <img className="logo" onClick={() => handleNavigate('/')} src={logoAR} />
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
