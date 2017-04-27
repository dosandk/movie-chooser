import React from 'react';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';

const Index = () => (
  <List>
    <Link to="/">
      <ListItem primaryText="Home" />
    </Link>
    <Link to="/test">
      <ListItem primaryText="Test Component"/>
    </Link>
    <Link to="/counter">
      <ListItem primaryText="Counter" />
    </Link>
    <Link to="/login">
      <ListItem primaryText="Login" />
    </Link>
  </List>
);

export default Index;
