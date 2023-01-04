import {
  AppBar,
  Box,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';

import {Menu as MenuIcon} from '@material-ui/icons';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import mainLogo from '../../image/Marvel_Logo.svg.png';
import {topAppBarStyles} from './style';

const useStyles = makeStyles(topAppBarStyles);
const Header = ({open, handleDrawerOpen}) => {
  const classes = useStyles();
  const [profileMenu, setProfileMenu] = useState(null);
  
  return (<AppBar position="absolute"
                  className={clsx(classes.appBar, open && classes.appBarShift)}
  >
    <Toolbar className={classes.toolbar}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
      >
        <MenuIcon/>
      </IconButton>
      
      <Box>
        <img className={classes.mainLogo} src={mainLogo} alt="mainlogo"/>
      </Box>
      {/* TODOS fix align  */}
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        className={classes.title}
      >
      
      </Typography>
      <AuthContext.Consumer>
        {({authorize, onLogout}) => (<>
          {authorize ? <>
            <Typography
              className={classes.profileMenuLink}
              color="primary"
              onClick={() => onLogout()}
            >
              SignOut
            </Typography>
          </> : <Box display="flex" flexDirection="row">
            <Box mx={2}>
              <Link className={classes.profileMenuLink}
                    to="/login">
                SignIn
              </Link>
            </Box>
            <Box mx={2}>
              <Link className={classes.profileMenuLink}
                    to="/Register">
                SignUp
              </Link>
            </Box>
          </Box>}
        
        </>)}
      </AuthContext.Consumer>
    </Toolbar>
  </AppBar>);
};

Header.propTypes = {
  open: PropTypes.bool, handleDrawerOpen: PropTypes.func,
};

export default Header;
