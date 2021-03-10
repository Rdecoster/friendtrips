import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../components/providers/AuthenticationProvider.jsx';
import { ApplicationContext } from '../components/providers/ApplicationProvider.jsx';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ChatIcon from '@material-ui/icons/Chat';
import HotelIcon from '@material-ui/icons/Hotel';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FlightIcon from '@material-ui/icons/Flight';
import Button from '@material-ui/core/Button';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    background: 'rgb(17, 175, 242)',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {

    flexGrow: 1,
    padding: theme.spacing(3),
  },
  button: {
    margin: 'auto',

  }

}));



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

`;

// const UL = styled.ul`
//   list-style: none;
//   padding: 0;
//   margin: 0;
//   position: relative;
//   height: 80%;
// `
// const LI = styled.li`
//   height: 10%;
//   margin: 1%;
//   border: 1px solid black;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: #f9f9f9;
// `
// const Button = styled.button`
//   height: 40%;
//   width: 50%;
//   background-color: #f9f9f9;
//   border: 2px solid #6886c5;
//   color: #6886c5;
// `

const Footer = styled.footer`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 10%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;


const NavBar = () => {
  const authContext = useContext(AuthContext);
  const appContext = useContext(ApplicationContext);
  const linkStyle = {

  }

  const classes = useStyles();
  return (
    <Container>

      <div className={classes.root}>
        <CssBaseline />
        {/* <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>

            <Typography variant="h6" noWrap>

              <H3>Welcome back{(authContext.username) ? ', ' + authContext.username : null}!</H3>

            </Typography>
          </Toolbar>
        </AppBar> */}
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Toolbar />


          <div className={classes.drawerContainer}>
            <List>
            <ListItem>
            <Typography variant="h6" color="inherit">
            Welcome back{(authContext.username) ? ', ' + authContext.username : null}!

    </Typography>
            </ListItem>
            <Divider />
              <ListItem>
                <Select>
                  {appContext.tripList.map((trip, i) => {
                    return (
                      <option key={`trip-${i}`} value={trip.id}>{trip.name}</option>
                    )
                  })}
                </Select>
              </ListItem>
              <Divider />

              {['chats', 'flights', 'hotels', 'itinerary'].map((text, index) => (

                <ListItem button key={text}>
                  <ListItemIcon>{index === 0 ? <ChatIcon />
                    : index === 1 ? <FlightIcon />
                      : index === 2 ? <HotelIcon />
                        : <DateRangeIcon />
                  }
                  </ListItemIcon>
                  <Link to={`/${text}`}><ListItemText primary={text.toUpperCase()} /></Link>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              <ListItem button onClick={authContext.signOut} >
                <ListItemIcon>
                  {/* <Button className={classes.button} variant="outlined" color="primary" onClick={authContext.signOut}>
                  LOG OUT
                  </Button> */}
                  <ExitToAppIcon />
                  <ListItemText primary='   Log Out' />
                </ListItemIcon>
              </ListItem>
            </List>




          </div>

        </Drawer>
        <main className={classes.content}>
        <Toolbar />


      </main>
      </div>

    </Container>
  );
};

export default NavBar;