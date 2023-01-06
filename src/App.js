import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from '@material-ui/core/styles';
import React, {Component} from 'react';
import {
  BrowserRouter,
  Link,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import {AuthProvider} from './context/AuthContext';

import Dashboard from './pages/dashboard/Dashboard';
import HomeView from './pages/home/Home';
import Login from './pages/login/Login';

import Characters from './pages/marvel/characters/Characters';
import Comics from './pages/marvel/comics/Comics';
import Creators from './pages/marvel/creators/Creators';
import Events from './pages/marvel/events/Events';

import Register from './pages/register/Register';
import * as ROUTES from './routes/route';

import theme from './themes/default';

const NotFoundView = () => {
  return (<>
      <div>ERROR 404</div>
      <Link to={'/'}>Go to the home page</Link>
    </>
  
  );
};

const useAuth = () => {
  const user = localStorage.getItem('email');
  return !!user;
};

const ProtectedRoutes = () => {
  const auth = useAuth();
  return auth ? <Outlet/> : <Navigate to={ROUTES.Login}/>;
};

class App extends Component {
  render() {
    return (<BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          <div className="App">
            <Layout>
              <Routes>
                <Route path={ROUTES.Home} element={<HomeView/>}/>
                <Route path={ROUTES.Login} element={<Login/>}/>
                <Route path={ROUTES.Register} element={<Register/>}/>
                
                {/* Characters */}
                <Route path={ROUTES.Characters} element={<Characters/>}/>
                
                
                {/* Comics */}
                <Route path={ROUTES.Comics}
                       element={<Comics/>}/>
                
                
                {/* Creators */}
                <Route path={ROUTES.Creators}
                       element={<Creators/>}/>
                
                
                {/* Events */}
                <Route path={ROUTES.Events}
                       element={<Events/>}/>
                
                
                {/* Series */}
                <Route path={ROUTES.Series}
                       element={<Events/>}/>
                
                
                {/* Stories */}
                <Route path={ROUTES.Stories}
                       element={<Events/>}/>
                
                
                <Route path={ROUTES.Dashboard} element={<ProtectedRoutes/>}>
                  <Route path={ROUTES.Dashboard} element={<Dashboard/>}/>
                </Route>
                
                
                <Route path={ROUTES.Dashboard} element={<ProtectedRoutes/>}>
                  <Route path={ROUTES.Dashboard} element={<Dashboard/>}/>
                </Route>
                
                <Route path={ROUTES.Error} element={<NotFoundView/>}/>
                <Route path="*" element={<Navigate to={ROUTES.Error}/>}/>
              
              
              </Routes>
            
            </Layout>
          </div>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>);
  }
}

export default App;
