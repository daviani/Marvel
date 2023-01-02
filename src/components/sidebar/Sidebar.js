import {
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
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
  const [selectedItem, setSelectedItem] = useState('ElectionS');
  const [subOpen, setSubOpen] = useState({});
  
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
      <h2 className={classes.logo} spacing={2}>DevJS&nbsp;</h2>
      <Avatar size={40} src="/logo.png"/>
      <div className={classes.toolbarIconColse}>
        <IconButton onClick={handleDrawerClose} className={classes.IconColse}>
          <MenuIcon/>
        </IconButton>
      </div>
    </div>
    <Divider/>
    <List>
      {MenuItem.map((item) => (
        <div key={item.key}>
          <ListItem button key={item.key}
                    selected={item.key === selectedItem}
                    onClick={event => handleClick(
                      item.key)}
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
                <ListItem button
                          key={subitem.key}
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
              ))}
            </List>
          </Collapse>
        </div>
      ))}
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
