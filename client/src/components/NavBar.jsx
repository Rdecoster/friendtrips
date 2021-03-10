import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../components/providers/AuthenticationProvider.jsx';
import { ApplicationContext } from '../components/providers/ApplicationProvider.jsx';
import { Link } from 'react-router-dom';





const Container = styled.nav`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 15px;
  height: 100%;
  min-height: 100%;
  min-width: 20%;
`
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  justify-content: space-evenly;
  border-bottom: 1px solid black;
  min-height: 10%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: #ffe0ac;
`;
const H3 = styled.h3`
  margin-bottom: 0;
  color: white;
  font-size: 24px;
  text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;

const Select = styled.select`
  width: 50%;
  margin-bottom: 1%;
`;

const NavigationLinks = styled.div`
  height: 80%;
  background-color: #ffacb7;
`;
const UL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: relative;
  height: 80%;
`
const LI = styled.li`
  height: 10%;
  margin: 1%;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
`
const Button = styled.button`
  height: 40%;
  width: 50%;
  background-color: #f9f9f9;
  border: 2px solid #6886c5;
  color: #6886c5;
`
const Footer = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffacb7;
  height: 10%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;


const NavBar = () => {
  const authContext = useContext(AuthContext);
  const appContext = useContext(ApplicationContext);
  const linkStyle = {

  }
  return (
    <Container>
      <Header>
        <H3>Welcome back{(authContext.username) ? ', ' + authContext.username : null}!</H3>
        <Select>
          {appContext.tripList.map((trip, i)=>{
            return (
              <option key={`trip-${i}`} value={trip.id}>{trip.name}</option>
            )
          })}
        </Select>
      </Header>

      <NavigationLinks>
        <UL >
          <LI>
            <Link to="/chat">Chat</Link>
          </LI>
          <LI>
            <Link to="/flights">Flights</Link>
          </LI>
          <LI>
            <Link to="/hotels">Hotels</Link>
          </LI>
          <LI>
            <Link to="/itinerary">Itinerary Builder</Link>
          </LI>
        </UL>
      </NavigationLinks>
      <Footer>
        <Button onClick={authContext.signOut}>Log out</Button>
      </Footer>
    </Container>
  );
};

export default NavBar;