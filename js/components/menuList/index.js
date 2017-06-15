import React from 'react';
import MenuItem from '../menuItem';
import { List } from 'material-ui/List';

const MenuList = () => {
  return (
    <List>
      <MenuItem linkTo = '/' text = 'Home'/>
      <MenuItem linkTo = '/my-movies-collections' text = 'My Movies Collections'/>
      <MenuItem linkTo = '/my-favorite-movies' text = 'My favorite movies'/>
      <MenuItem linkTo = '/settings' text = 'Settings'/>
    </List>
  );
};

export default MenuList;
