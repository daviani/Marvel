import {
  Box,
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {Alert, AlertTitle} from '@material-ui/lab';
import {Formik} from 'formik';
import React from 'react';
import {Navigate} from 'react-router-dom';
import * as Yup from 'yup';
import Page from '../../components/page/Page';
import {AuthContext} from '../../context/AuthContext';
import * as ROUTES from '../../routes/route';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1, overflow: 'hidden', padding: theme.spacing(0, 3),
  }, alert: {
    width: '100%', '& > * + *': {
      marginTop: theme.spacing(2),
    },
  }, grid: {
    // maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`, padding: theme.spacing(2),
  }, paper: {
    padding: theme.spacing(2),
  }, icon: {
    fontSize: '40px',
  },
}));

const Login = () => {
  const classes = useStyles();
  return (<AuthContext.Consumer>
    {({authorize, onLogin, error}) => authorize ? (
      <Navigate to={ROUTES.Dashboard}/>) : (<Page title={'Login'}>
      <Grid container className={classes.root}>
        <Grid item xs={6} className={classes.grid}>
          <Paper className={classes.paper} elevation={3}>
            
            <AccountCircleIcon className={classes.icon}/>
            <Typography color="textPrimary" variant="h4">
              SignIn
            </Typography>
            
            <Formik
              initialValues={{
                email: '', password: '',
              }}
              validationSchema={Yup.object().shape(
//                {
//                email: Yup.string().
//                  email('Must be a valid email').
//                  max(255).
//                  required('Email is required'), password: Yup.string().
//                  max(255).
//                  required('Password is required'),
//              }
              )}
              onSubmit={(model) => {
                console.log(
                  'loginpage model___________________________________________',
                  model);
                onLogin(model);
              }}
            >
              
              {({
                errors,
                handleBlur,
                handleChange,
                handleSubmit,
                touched,
                values,
              }) => (<form onSubmit={handleSubmit}>
                {error && (<div className={classes.alert}>
                  <Alert severity="error">
                    <AlertTitle>Error</AlertTitle>Your username or your
                    password is <strong>incorrect!</strong>
                  </Alert>
                </div>)}
                
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  //                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="password"
                  value={values.password}
                  variant="outlined"
                />
                <Box my={2}>
                  <Button
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign in
                  </Button>
                </Box>
              </form>)}
            
            </Formik>
          </Paper>
        </Grid>
      </Grid>
    </Page>)}
  </AuthContext.Consumer>);
};

export default Login;

