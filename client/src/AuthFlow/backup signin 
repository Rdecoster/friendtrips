import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import {
  Redirect,
  Link
} from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #0F4C81;
`;
const Content = styled.section`
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: spaced-evenly;
  width: 40%;
  height: 70%;
  background-color: #FFFFFF;
`
const Header = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
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
  border-top: 1px solid black;
  border-radius: 10px;
  background-color: #F0F8FF;
`;
const Field = styled.div`
  width: 80%;
  height: 15%;
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

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reEnteredPassword, setReEnteredPassword] = useState('')
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === reEnteredPassword && email !== '' && username !== '') {
      let attemptedSignUp = { username, email, password };
      axios({
        method: 'post',
        url: '/auth/register',
        data: attemptedSignUp
      })
        .then((response) => {
          history.push('/login')
        })
        .catch((err) => {
          console.log('SHIT', err)
        })
    }
  }

  return (
    <Container>
      <Content>
        <Header>
          <H2>Signup</H2>
        </Header>
        <Form onSubmit={handleSubmit}>
          <Field>
            <Label>Username</Label>
            <Input
              value={username}
              onChange={(e) => { setUsername(e.target.value) }} placeholder='Username'
            />
          </Field>
          <Field>
            <Label>E-mail</Label>
            <Input
              value={email}
              onChange={(e) => { setEmail(e.target.value) }}
              placeholder='E-mail'
            />
          </Field>
          <Field>
            <Label>Password</Label>
            <Input
              value={password}
              onChange={(e) => { setPassword(e.target.value) }}
              placeholder='Password'
            />
          </Field>
          <Field>
            <Label>Re-Enter Password</Label>
            <Input
              value={reEnteredPassword}
              onChange={(e) => { setReEnteredPassword(e.target.value) }}
              placeholder='Re-enter Password'
            />
          </Field>
          <Button type="submit">Sign Up</Button>
          <P>Found your account? <Link to='/login'>Sign In</Link> </P>

        </Form>
      </Content>
    </Container>

  );
};

export default SignUp;

/*
<div>
      <form onSubmit={handleSubmit}>
        <Input
          value={username}
          onChange={(e)=>{setUsername(e.target.value)}} placeholder='Username'
        />
        <Input
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          placeholder='E-mail'
        />
        <Input
          value={password}
          onChange={(e)=>{setPassword(e.target.value)}}
          placeholder='Password'
        />
        <Input
          value={reEnteredPassword}
          onChange={(e)=>{setReEnteredPassword(e.target.value)}}
          placeholder='Re-enter Password'
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
*/