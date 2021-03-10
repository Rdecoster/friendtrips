import React, {useContext, useState, useEffect, useMemo} from 'react';
import PrivateRoute from './wrappers/PrivateRoute.jsx';
import axios from 'axios';
require('babel-polyfill')
import styled from 'styled-components';

import {AuthProvider, AuthContext} from './providers/AuthenticationProvider.jsx'
import Login from '../AuthFlow/Login.jsx';
import SignUp from '../AuthFlow/Signup.jsx';
import FriendTrips from './FriendTrips.jsx';



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';

const Application = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ##0F4C81;
`;

const App = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authContext = useMemo(() => ({
    signIn: (attemptedLogin) => {
      axios({
        method: 'post',
        url: '/auth/login',
        data: attemptedLogin
      })
        .then((response) => {
          console.log('USER LOGGED IN', response.data);
          if (typeof document.cookie.slice(document.cookie.indexOf('=') + 1) === 'string') {
            setUser(Number(document.cookie.slice(document.cookie.indexOf('=') + 1)))
          } else {
            setUser(document.cookie.slice(document.cookie.indexOf('=') + 1));
          }
          setUsername(response.data)
        })
        .catch((err) => {
          console.log('USER WAS UNABLE TO LOG IN', err)
        })
    },
    signOut: () => {
      axios.get('/auth/logout')
      setUser(null);
    },
    checkStatus: () => {
      return axios.get('/auth/check')
        .then((result) => {
          console.log('You have been authenticated', result);
          setUser(result.data.user_id);
          setUsername(result.data.username);
          return result.data;
        })
        .catch(() => {
          console.log('You have not been authenticated');
        })
    },
    user: user,
    username: username
  }));

  useEffect(async () => {
    const user = await authContext.checkStatus();
  }, [])
  return (
    <AuthContext.Provider value={authContext}>

      <Router style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <Application>
          <Switch>
            <Route exact path="/">
              {user ? <Redirect to="/home"/> : <Redirect to="/login"/>}
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <PrivateRoute path="/home">

              <FriendTrips/>
            </PrivateRoute>
          </Switch>
        </Application>
      </Router>

    </AuthContext.Provider>
  );
};

export default App;
