import {Container, makeStyles} from '@material-ui/core';
import React, {useState} from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import {layoutStyles} from './style';

const useStyles = makeStyles(layoutStyles);

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
    <div className={classes.root}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen}/>
      <Sidebar open={open} handleDrawerClose={handleDrawerClose}/>
      <main className={classes.content}>
        <div className={classes.appBarSpacer}/>
        
        {/* <Grid container spacing={0}> */}
        <Container className={classes.container} maxWidth="xl">
          {children}
        </Container>
        {/* </Grid> */}
        
        <Footer/>
      </main>
    </div>
  );
};

export default Layout;
