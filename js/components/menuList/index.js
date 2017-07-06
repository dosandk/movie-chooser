import React, {Component} from 'react';
import MenuItem from '../menuItem';
import { List } from 'material-ui/List';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionSettings from 'material-ui/svg-icons/action/settings';
import ImageCollections from 'material-ui/svg-icons/image/collections';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import styles from './menuList.scss';

class MenuList extends Component {
  constructor() {
    super();
    this.state = {
      isListOpened: true
    };
    this.handleSandwichClick = this.handleSandwichClick.bind(this);
  }

  handleSandwichClick() {
    this.setState({isListOpened: !this.state.isListOpened});
  }

  get listViewStyles() {
    return this.state.isListOpened === true ? 'menu-list' : 'menu-list--hidden';
  }

  render() {
    return (
      <div>
        <div className={styles['sandwich-button']} onClick={this.handleSandwichClick}>
          <NavigationMenu color='#000'/>
        </div>
        <List className={styles[`${this.listViewStyles}`]}>
          <MenuItem linkTo = '/' text = 'Home' icon = {<ActionHome color='#000'/>}/>
          <MenuItem linkTo = '/collections' text = 'My movies collections' icon = {<ImageCollections color='#000'/>}/>
          <MenuItem linkTo = '/favorite' text = 'My favorite movies' icon = {<ActionGrade color='#000'/>}/>
          <MenuItem linkTo = '/settings' text = 'Settings' icon = {<ActionSettings color='#000'/>}/>
        </List>
      </div>
    );
  }
}

export default MenuList;
