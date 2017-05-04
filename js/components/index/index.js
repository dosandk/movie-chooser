import React from 'react';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';

const Index = () => (
  <List>
    <Link to="/">
      <ListItem primaryText="Home" />
    </Link>
  </List>
);

export default Index;
