import React, {useContext, useState, useEffect, useMemo} from 'react';
import PrivateRoute from './wrappers/PrivateRoute.jsx';
import axios from 'axios';
require('babel-polyfill')
import styled from 'styled-components';

import {AuthProvider, AuthContext} from './providers/AuthenticationProvider.jsx'
import Login from './Login.jsx';
import SignUp from './Signup.jsx';
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
  height: 98%;
  width: 98%;
`;

const App = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authContext = useMemo(() => ({
    signIn: (attemptedLogin) => {
      axios({
        method: 'post',
        url: '/login',
        data: attemptedLogin
      })
        .then((response) => {
          console.log('USER LOGGED IN', response.data)
          setUser(document.cookie.slice(document.cookie.indexOf('=') + 1));
          setUsername(response.data)
        })
        .catch((err) => {
          console.log('USER WAS UNABLE TO LOG IN', err)
        })
    },
    signOut: () => {
      axios.get('/logout')
      setUser(null);
    },
    checkStatus: () => {
      return axios.get('/checkAuth')
        .then((result) => {
          console.log('You have been authenticated', result);
          setUser(result.data.user);
        })
        .catch(() => {
          console.log('You have not been authenticated');
        })
    }
    ,
    user: user,
    username: username
  }));

  useEffect(async () => {
    await authContext.checkStatus();
    console.log(user);
  }, [])
  return (
    <AuthContext.Provider value={authContext}>

      <Router>
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
