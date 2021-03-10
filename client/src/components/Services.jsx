import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { ApplicationProvider, ApplicationContext } from '../components/providers/ApplicationProvider.jsx';
import Page from './Page.jsx'
import Chat from '../GroupChat/Chat.jsx';
import ItineraryBuilder from '../ItineraryBuilder/ItineraryBuilder.jsx';
import Flights from '../Flights/Flights.jsx';
import Hotels from '../Hotels/Hotels.jsx';
import Welcome from './Welcome.jsx';

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom';

import NavBar from './NavBar.jsx';

const Container = styled.div`
  display: flex;
  height: 97%;
  width: 98%;
  padding: 1%;
  justify-content: space-around;
  align-items: center;
  position: relative;
  /* background-color: #6886c5; */
  /* border: 1px solid black; */
`;

const Section = styled.section`
  position: relative;
  height: 100%;
  margin-left: 2%;
  flex-grow: 1;
  border: 1px solid black;
  border-radius: 15px;
  background-color: #f9f9f9;
`;

const Services = () => {


  return (

          <Section>
            <Switch>

              <Route exactly path="/itinerary">
                <ItineraryBuilder />
              </Route>
              <Route exactly path="/flights">
                <Flights />
              </Route>
              <Route exactly path="/hotels">
                <Hotels />
              </Route>
              <Route>
                <Chat />
              </Route>

            </Switch>
            </Section>

  );
};

export default Services;