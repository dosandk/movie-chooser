import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import menuList from '../../config/menu-config';

class MenuList extends Component {
  constructor(props) {
    super(props);

    this.renderMenuList = this.renderMenuList.bind(this);
  }

  renderMenuList() {
    return menuList.map(menuItem => <Link to={menuItem.link}><ListItem primaryText={menuItem.name} /></Link>);
  }

  render() {
    return (
      <List>
        {this.renderMenuList()}
      </List>
    );
  }
}

export default MenuList;
