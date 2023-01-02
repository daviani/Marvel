import {makeStyles, Paper, Typography} from '@material-ui/core';
import React from 'react';
import {FooterStyles} from './style';

const useStyles = makeStyles(
  FooterStyles,
);
const Footer = () => {
  const classes = useStyles();
  return (
    <Paper elevation={5} className={classes.copyright}>
      <Typography variant={'body2'} color={'textSecondary'} align={'center'}>
        {'Copyright © Code-Js'} {new Date().getFullYear()} {'.'}
      </Typography>
    </Paper>
  );
};

export default Footer;
