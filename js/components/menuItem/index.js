import React from 'react';
import { Link } from 'react-router-dom';
import {ListItem} from 'material-ui/List';
import styles from './menuItem.scss';

const MenuItem = ({linkTo, text, icon}) => {
  return (
    <Link className={styles['menu-link']} to={linkTo}>
      <ListItem primaryText={text} leftIcon={icon} />
    </Link>
  );
};

export default MenuItem;
