import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
} from '@material-ui/core';
import React from 'react';
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Items from './pages/Items';
import Main from './pages/Main';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">
            <NavLink exact to="/">
              Main
            </NavLink>
          </Button>
          <Button color="inherit">
            <NavLink exact to="/items">
              Items
            </NavLink>
          </Button>
        </Toolbar>
      </AppBar>

      <Box p={5}>
        <Container>
          <Switch>
            <Route path="/items">
              <Items />
            </Route>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </Container>
      </Box>
    </Router>
  );
}

export default App;
