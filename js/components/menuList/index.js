import React from 'react';
import MenuItem from '../menuItem';
import { List } from 'material-ui/List';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ImageCollections from 'material-ui/svg-icons/image/collections';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';

const MenuList = () => {
  return (
    <List>
      <NavigationMenu />
      <MenuItem linkTo = '/' text = 'Home' icon = {<ActionHome />}/>
      <MenuItem linkTo = '/my-movies-collections' text = 'My Movies Collections' icon = {<ImageCollections />}/>
      <MenuItem linkTo = '/my-favorite-movies' text = 'My favorite movies' icon = {<ActionGrade />}/>
      <MenuItem linkTo = '/settings' text = 'Settings' icon = {<ActionSettings />}/>
    </List>
  );
};

export default MenuList;
