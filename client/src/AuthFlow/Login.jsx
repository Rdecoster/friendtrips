import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';


import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { AuthContext } from '../components/providers/AuthenticationProvider.jsx'
import {
  Redirect,
  Link
} from 'react-router-dom';
import styled from 'styled-components';


const Image = styled.div`

width: 100%;
height: 100%;
 img {
   height:800px;
   object-fit: cover;
   width: 100%;
 }
`;



const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #11aff2;

`;
const Content = styled.section`
  position: relative;
  border: 1px solid black;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-self: center;

  align-content: space-evenly;
  width: 80%;
  height: 80%;
  background-color: #FFFFFF;
  padding: 20px;
`;
const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 0px;
`;
const H1 = styled.h1`

`;
const Form = styled.form`
  width: 100%;

  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 2%;
  padding-bottom: 2%;
  border: 1px solid black;
  border-radius: 25px;
  background-color: #F0F8FF;

`;
const Field = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  height: 60%;
  min-width: 90%;
  margin-bottom: 5%
`;
const Button = styled.button`
  margin-top: 2%;
  width: 40%;
  height: 60%;
  font-weight: bold;
  font-size: 16px;
  background-color: #11f255;
  color: black;
`;
const Label = styled.label`
  text-align: left;
  height: 40%;
`;
const P = styled.p`
  font-size: 12px;
  margin: 0;
  pardding: 0;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },

  avatar: {

    margin: theme.spacing(1),


    backgroundColor: theme.palette.secondary.main,
  },
  paper: {
    margin: theme.spacing(4, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

}));


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hidden, setHidden] = useState(true)
  const authContext = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    let attemptedLogin = { username, password };
    authContext.signIn(attemptedLogin);
  }

  const hidePassword = () => {
    setHidden(!hidden)
  }
  const classes = useStyles();



  return (
    <Container>



      <Image>
        <div>
          <img src="https://images.pexels.com/photos/2672979/pexels-photo-2672979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
        </div>
      </Image>



      <Container >

        {(!authContext.user) ?

          <Content>
            <Header>
              <div>
                <H1>FriendTrips</H1>
                 Do more togeather!
              </div>
            </Header>
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
          </Typography>
            </div>

            <Header>

            </Header>
            <div>
              <Form onSubmit={handleSubmit}>

                <Field>

                  <Label>Username</Label>

                  <Input value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder='Username or Email' />
                </Field>


                <Field>

                  <Label>Password</Label>

                  <Input value={password} onChange={(e) => { setPassword(e.target.value) }} type={hidden ? 'password' : 'text'} placeholder='Password' />
                </Field>

                <Button type="submit">Sign In</Button>
                <P>Don't have an account? <Link to='/signup'>Sign Up</Link> </P>

              </Form>
            </div>
          </Content> :
          <Redirect to="/home" />}
      </Container>
    </Container>
  );
};

export default Login;