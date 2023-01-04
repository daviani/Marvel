import {Box} from '@material-ui/core';
import React, {useEffect, useState} from 'react';

const Dashboard = () => {
  const [userName, setUserName] = useState('');
  const email = localStorage.getItem('email');
  const mockAPiUser = JSON.parse(localStorage.getItem('mockApiUsers'));
  
  useEffect(() => {
    setUserName(mockAPiUser.find(item => item.email === email).firstName);
  }, []);
  return (
    <Box mt={5}>Welcome {userName}</Box>
  );
};

export default Dashboard;
