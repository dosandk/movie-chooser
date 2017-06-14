import React from 'react';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';

const Index = () => (
  <List>
    <Link to="/">
      <ListItem primaryText="Main page" />
    </Link>
    <Link to="/collections">
      <ListItem primaryText="My movies collections" />
    </Link>
    <Link to="/favorite">
      <ListItem primaryText="My favorite movies" />
    </Link>
    <Link to="/settings">
      <ListItem primaryText="Settings" />
    </Link>
  </List>
);

export default Index;
