import DashboardIcon from '@material-ui/icons/Dashboard';
import FaceIconTwoToneIcon from '@mui/icons-material/FaceTwoTone';
import FeedIconTwoToneIcon from '@mui/icons-material/FeedTwoTone';
import GradeIconTwoToneIcon from '@mui/icons-material/GradeTwoTone';
import HailIconTwoToneIcon from '@mui/icons-material/HailTwoTone';
import HistoryIconTwoToneIcon from '@mui/icons-material/HistoryTwoTone';
import MovieIconTwoToneIcon from '@mui/icons-material/MovieTwoTone';
import WebIconTwoToneIcon from '@mui/icons-material/WebTwoTone';

import React from 'react';
import * as ROUTES from './../routes/route';

const MenuItem = [
  {
    key: 'Dashboard', label: 'DashBoard', icon: <DashboardIcon/>, items: [
      {
        key: 'My space',
        label: 'My space',
        icon: <WebIconTwoToneIcon/>,
        route: ROUTES.Dashboard,
      }],
  }, {
    key: 'Characters',
    label: 'Characters',
    icon: <FaceIconTwoToneIcon/>,
    items: [
      {
        key: 'Characters',
        label: 'Characters',
        icon: <FaceIconTwoToneIcon/>,
        route: '/' + ROUTES.Characters,
      }, {
        key: 'Comics',
        label: 'Comics',
        icon: <FeedIconTwoToneIcon/>,
        route: '/' + ROUTES.Characters + '_' + ROUTES.Comics,
      }, {
        key: 'Events',
        label: 'Events',
        icon: <GradeIconTwoToneIcon/>,
        route: ROUTES.Characters + '_' + ROUTES.Events,
      }, {
        key: 'Series',
        label: 'Series',
        icon: <MovieIconTwoToneIcon/>,
        route: ROUTES.Characters + '_' + ROUTES.Series,
      }, {
        key: 'Stories',
        label: 'Stories',
        icon: <HistoryIconTwoToneIcon/>,
        route: ROUTES.Characters + '_' + ROUTES.Stories,
      }],
  }, {
    key: 'Comics', label: 'Comics', icon: <FeedIconTwoToneIcon/>, items: [
      {
        key: 'Comics',
        label: 'Comics',
        icon: <FeedIconTwoToneIcon/>,
        route: '/' + ROUTES.Comics,
      }, {
        key: 'Characters',
        label: 'Characters',
        icon: <FaceIconTwoToneIcon/>,
        route: ROUTES.Comics + '_' + ROUTES.Characters,
      }, {
        key: 'Creators',
        label: 'Creators',
        icon: <HailIconTwoToneIcon/>,
        route: ROUTES.Comics + '_' + ROUTES.Creators,
      }, {
        key: 'Events',
        label: 'Events',
        icon: <GradeIconTwoToneIcon/>,
        route: ROUTES.Comics + '_' + ROUTES.Events,
      }, {
        key: 'Stories',
        label: 'Stories',
        icon: <HistoryIconTwoToneIcon/>,
        route: ROUTES.Comics + '_' + ROUTES.Stories,
      }],
  }, {
    key: 'Creators', label: 'Creators', icon: <HailIconTwoToneIcon/>, items: [
      {
        key: 'Creators',
        label: 'Creators',
        icon: <HailIconTwoToneIcon/>,
        route: '/' + ROUTES.Creators,
      }, {
        key: 'Comics',
        label: 'Comics',
        icon: <FeedIconTwoToneIcon/>,
        route: '/' + ROUTES.Creators + '_' + ROUTES.Comics,
      }, {
        key: 'Events',
        label: 'Events',
        icon: <GradeIconTwoToneIcon/>,
        route: '/' + ROUTES.Creators + '_' + ROUTES.Events,
      }, {
        key: 'Series',
        label: 'Series',
        icon: <MovieIconTwoToneIcon/>,
        route: '/' + ROUTES.Creators + '_' + ROUTES.Series,
      }, {
        key: 'Stories',
        label: 'Stories',
        icon: <HistoryIconTwoToneIcon/>,
        route: '/' + ROUTES.Creators + '_' + ROUTES.Stories,
      }],
  }, {
    key: 'Events', label: 'Events', icon: <GradeIconTwoToneIcon/>, items: [
      {
        key: 'Events',
        label: 'Events',
        icon: <GradeIconTwoToneIcon/>,
        route: '/' + ROUTES.Events,
      }, {
        key: 'Characters',
        label: 'Characters',
        icon: <FaceIconTwoToneIcon/>,
        route: '/' + ROUTES.Events + '_' + ROUTES.Characters,
      }, {
        key: 'Comics',
        label: 'Comics',
        icon: <FeedIconTwoToneIcon/>,
        route: '/' + ROUTES.Events + '_' + ROUTES.Comics,
      }, {
        key: 'Creators',
        label: 'Creators',
        icon: <HailIconTwoToneIcon/>,
        route: '/' + ROUTES.Events + '_' + ROUTES.Creators,
      }, {
        key: 'Series',
        label: 'Series',
        icon: <MovieIconTwoToneIcon/>,
        route: '/' + ROUTES.Events + '_' + ROUTES.Series,
      }, {
        key: 'Stories',
        label: 'Stories',
        icon: <HistoryIconTwoToneIcon/>,
        route: '/' + ROUTES.Events + '_' + ROUTES.Stories,
      }],
  }, {
    key: 'Series', label: 'Series', icon: <MovieIconTwoToneIcon/>, items: [
      {
        key: 'Series',
        label: 'Series',
        icon: <MovieIconTwoToneIcon/>,
        route: '/' + ROUTES.Series,
      }, {
        key: 'Characters',
        label: 'Characters',
        icon: <FaceIconTwoToneIcon/>,
        route: '/' + ROUTES.Series + '_' + ROUTES.Characters,
      }, {
        key: 'Comics',
        label: 'Comics',
        icon: <FeedIconTwoToneIcon/>,
        route: '/' + ROUTES.Series + '_' + ROUTES.Comics,
      }, {
        key: 'Creators',
        label: 'Creators',
        icon: <HailIconTwoToneIcon/>,
        route: '/' + ROUTES.Series + '_' + ROUTES.Creators,
      }, {
        key: 'Events',
        label: 'Events',
        icon: <GradeIconTwoToneIcon/>,
        route: '/' + ROUTES.Series + '_' + ROUTES.Events,
      }, {
        key: 'Stories',
        label: 'Stories',
        icon: <HistoryIconTwoToneIcon/>,
        route: '/' + ROUTES.Series + '_' + ROUTES.Stories,
      }],
  }, {
    key: 'Stories', label: 'Stories', icon: <HistoryIconTwoToneIcon/>, items: [
      {
        key: 'Stories',
        label: 'Stories',
        icon: <HistoryIconTwoToneIcon/>,
        route: '/' + ROUTES.Stories,
      },
      {
        key: 'Characters',
        label: 'Characters',
        icon: <FaceIconTwoToneIcon/>,
        route: '/' + ROUTES.Stories + '_' + ROUTES.Characters,
      }, {
        key: 'Comics',
        label: 'Comics',
        icon: <FeedIconTwoToneIcon/>,
        route: '/' + ROUTES.Stories + '_' + ROUTES.Comics,
      }, {
        key: 'Creators',
        label: 'Creators',
        icon: <HailIconTwoToneIcon/>,
        route: '/' + ROUTES.Stories + '_' + ROUTES.Creators,
      }, {
        key: 'Events',
        label: 'Events',
        icon: <GradeIconTwoToneIcon/>,
        route: '/' + ROUTES.Stories + '_' + ROUTES.Events,
      }, {
        key: 'Series',
        label: 'Series',
        icon: <MovieIconTwoToneIcon/>,
        route: '/' + ROUTES.Stories + '_' + ROUTES.Series,
      }],
  }];
console.log(MenuItem);
export default MenuItem;
