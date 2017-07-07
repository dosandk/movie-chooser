import React, {Component} from 'react';
import MenuItem from '../menuItem';
import { List } from 'material-ui/List';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import styles from './menuList.scss';
import {menu} from './config';

class MenuList extends Component {
  constructor() {
    super();
    this.state = {
      isListOpened: true
    };
    this.handleSandwichClick = this.handleSandwichClick.bind(this);
  }

  handleSandwichClick() {
    this.setState(state => ({isListOpened: !state.isListOpened}));
  }

  get listViewStyles() {
    return this.state.isListOpened ? 'menu-list' : 'menu-list--hidden';
  }

  get menuItems() {
    return menu.map(item => <MenuItem linkTo={item.link} text={item.text} icon={item.icon}/>);
  }

  render() {
    return (
      <div>
        <div className={styles['sandwich-button']} onClick={this.handleSandwichClick}>
          <NavigationMenu color='#000'/>
        </div>
        <List className={styles[`${this.listViewStyles}`]}>
          {this.menuItems}
        </List>
      </div>
    );
  }
}

export default MenuList;
