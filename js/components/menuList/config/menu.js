import React from 'react';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ImageCollections from 'material-ui/svg-icons/image/collections';

const iconsColor = '#000';

const menu = [
  {
    text: 'Home',
    link: '/',
    icon: <ActionHome color={iconsColor}/>
  },
  {
    text: 'My movies collections',
    link: '/collections',
    icon: <ImageCollections color={iconsColor}/>
  },
  {
    text: 'My favorite movies',
    link: '/favorite',
    icon: <ActionGrade color={iconsColor}/>
  },
  {
    text: 'Settings',
    link: '/settings',
    icon: <ActionSettings color={iconsColor}/>
  }
];

export default menu;
