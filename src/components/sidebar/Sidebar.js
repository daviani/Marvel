import {
  Box,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import MenuItem from '../../data/menu';
import {sidebarStyles} from './style';

const Sidebar = ({classes, open, handleDrawerClose}) => {
  const [selectedItem, setSelectedItem] = useState('');
  const [subOpen, setSubOpen] = useState({});
  
  console.log(selectedItem, subOpen);
  const handleClick = (key) => {
    setSubOpen({[key]: !subOpen[key] || false});
  };
  
  const handleSelect = (index) => {
    setSelectedItem(index);
  };
  
  return (<Drawer
    variant="permanent"
    classes={{
      paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
    }}
    open={open}
  >
    <div className={classes.toolbarIcon}>
      <h2 className={classes.logo} spacing={2}>Marvel APP</h2>
      <div className={classes.toolbarIconColse}>
        <IconButton onClick={handleDrawerClose} className={classes.IconColse}>
          <MenuIcon/>
        </IconButton>
      </div>
    </div>
    <Divider/>
    <List>
      {MenuItem.map((item) => (<div key={item.key}>
        <ListItem button key={item.key}
                  selected={item.key === selectedItem}
                  onClick={event => handleClick(item.key)}
                  className={classes.Item}
        >
          <ListItemIcon
            className={classes.listItem}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label}/>
          {subOpen[item.key] ? <ArrowDropDownIcon/> : <ArrowRightIcon/>}
        </ListItem>
        
        <Collapse in={subOpen[item.key]} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.items.map((subitem) => (
              <Box ml={2} key={subitem.key}
              >
                <ListItem button
                          component={Link}
                          to={subitem.route}
                          selected={subitem.key === selectedItem}
                          onClick={event => handleSelect(subitem.key)}
                          classes={{selected: classes.selected}}
                          className={classes.ItemNested}
                >
                  <ListItemIcon
                    className={classes.listItem}>{subitem.icon}</ListItemIcon>
                  <ListItemText primary={subitem.label}/>
                </ListItem>
              </Box>))}
          </List>
        </Collapse>
      </div>))}
    </List>
    <Divider/>
  </Drawer>);
  
};

Sidebar.propTypes = {
  classes: PropTypes.object,
  open: PropTypes.bool,
  handleDrawerClose: PropTypes.func,
};

export default withStyles(sidebarStyles)(Sidebar);
