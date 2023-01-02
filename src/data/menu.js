import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import RoomIcon from '@material-ui/icons/Room';
import WebIcon from '@material-ui/icons/Web';
import React from 'react';
import * as ROUTES from './../routes/route';

const MenuItem = [
  {
    key: 'Dashboard',
    label: 'DashBoard',
    icon: <DashboardIcon/>,
    items: [
      {
        key: 'Code-Js',
        label: 'Code-Js',
        icon: <WebIcon/>,
        route: ROUTES.Dashboard,
      },
    ],
  },
  {
    key: 'Staff',
    label: 'Staff',
    icon: <PeopleIcon/>,
    items: [
      {
        key: 'Manage Staff',
        label: 'Manage Staff',
        icon: <AccountBoxIcon/>,
        route: ROUTES.Staff,
      },
      {
        key: 'Add Staff',
        label: 'Add Staff',
        icon: <AccountBoxIcon/>,
        route: ROUTES.StaffAdd,
      },
    ],
  },
  {
    key: 'User',
    label: 'User',
    icon: <AccountCircleIcon/>,
    items: [
      {
        key: 'Manage User',
        label: 'Manage User',
        icon: <RoomIcon/>,
        route: ROUTES.UserAdd,
      },
    ],
  },
];

export default MenuItem;
