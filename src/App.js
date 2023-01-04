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
import Characters from './pages/characters/Characters';
import Dashboard from './pages/dashboard/Dashboard';
import HomeView from './pages/home/Home';
import Login from './pages/login/Login';
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
                <Route path={ROUTES.Characters} element={<Characters/>}/>
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
