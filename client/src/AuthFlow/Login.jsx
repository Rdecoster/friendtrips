import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../components/providers/AuthenticationProvider.jsx'
import {
  Redirect,
  Link
} from 'react-router-dom';
import styled from 'styled-components';

const ImageContainer =styled.div`
position: relative;
height: 10%;


`
const Image = styled.div`




`
const Container = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #11aff2;
`;
const Content = styled.section`
  position: relative;
  border: 1px solid black;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  /* align-self: center; */
  align-content: space-evenly;
  width: 60%;
  height: 35%;
  background-color: #FFFFFF;
  padding: 20px;
`
const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 0px;
`;
const H2 = styled.h2`

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
  border-radius: 30px;
  background-color: #F0F8FF;
  opacity: 20%:
`;
const Field = styled.div`
  width: 80%;
  height: 20%;
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  height: 60%;
  min-width: 90%;
`;
const Button = styled.button`
  margin-top: 2%;
  width: 40%;
  height: 10%;
  font-weight: bold;
  font-size: 16px;
  background-color: #0F4C81;
  color: white;
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

  return (
    <Container>
    <ImageContainer>
    <Image>
      <img src= 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80'/>
    </Image>
    </ImageContainer>

      {(!authContext.user) ?
        <Content>

          <Header>
            {/* <H2>Login</H2> */}
          </Header>
          <Form onSubmit={handleSubmit}>
            <Field>
              <Label>Username</Label>
              <Input value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder='Username or Email' />
            </Field>
            <Field>
              <Label>Password</Label>
              <Input value={password} onChange={(e) => { setPassword(e.target.value)}} type={hidden ? 'password' : 'text'} placeholder='Password' />
            </Field>
            <Button type="submit">Sign In</Button>
            <P>Don't have an account? <Link to='/signup'>Sign Up</Link> </P>

          </Form>
        </Content> :
        <Redirect to="/home" />}
    </Container>
  );
};

export default Login;