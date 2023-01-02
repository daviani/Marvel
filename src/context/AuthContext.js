import PropTypes from 'prop-types';
import React, {createContext, useLayoutEffect, useState} from 'react';
import {Navigate, Route} from 'react-router-dom';
import MockApi from '../api/MockApi';

const AuthContext = createContext('');

const AuthProvider = props => {
  const [contextState, setContextState] = useState({
    authorize: false,
    checkAuth: false,
    authPending: false,
    error: false,
    success: false,
  });
  
  const {children} = props;
  
  const mockApi = new MockApi(
    JSON.parse(localStorage.getItem('mockApiUsers')) ||
    {username: 'test@test.com', password: 'test123'}, 1000);
  
  const onLogin = model => {
    setContextState({
      ...contextState,
      authPending: true,
    });
    mockApi.authentificate(model.email, model.password).then(response => {
      if (response.error === false) {
        localStorage.setItem('email', model.email);
        localStorage.setItem('password', model.password);
        setContextState({
          authorize: true,
          checkAuth: true,
          authPending: false,
          error: false,
        });
        console.clear();
      } else {
        setContextState({
          authorize: false,
          checkAuth: true,
          authPending: false,
          error: true,
        });
      }
    });
  };
  
  const onLogout = () => {
    console.log('SigiOut');
    localStorage.removeItem('email');
    localStorage.removeItem('password');
    setContextState({
      ...contextState,
      authorize: false,
      checkAuth: true,
    });
  };
  
  const signIn = model => {
    setContextState({
      ...contextState,
      backdrop: true,
    });
    mockApi.signInUser(model.email, model.password).then(response => {
      if (response && response.error === false) {
        setContextState({
          ...contextState,
          authPending: false,
          success: true,
          error: false,
        });
      } else {
        setContextState({
          ...contextState,
          authPending: false,
          error: true,
          success: false,
        });
      }
    });
  };
  
  useLayoutEffect(() => {
    const auth = mockApi.checkAuthenticate();
    if (auth !== contextState.authorize) {
      setContextState({
        ...contextState,
        authorize: auth,
        checkAuth: true,
      });
    }
  }, []);
  
  return (
    <AuthContext.Provider
      value={{
        authorize: contextState.authorize,
        checkAuth: contextState.checkAuth,
        authPending: contextState.authPending,
        error: contextState.error,
        success: contextState.success,
        onLogin,
        onLogout,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({component: Component, ...rest}) => (
  <AuthContext.Consumer>
    {({authorize, checkAuth}) => {
      let content = '';
      
      if (authorize) {
        content = (
          <Route
            render={props => (
              <Component {...props} />
            )}
            {...rest}
          />
        );
      } else if (checkAuth || !authorize) {
        console.log('You must be login');
        content = <Navigate to="/login"/>;
      }
      return content;
    }}
  </AuthContext.Consumer>
);

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.element,
};

export {AuthContext, AuthProvider, PrivateRoute};
