import React from 'react';
import { Link } from 'react-router-dom';
import {ListItem} from 'material-ui/List';

const MenuItem = ({linkTo, text}) => {
  return (
    <Link to={linkTo}>
      <ListItem primaryText={text} />
    </Link>
  );
};

export default MenuItem;
