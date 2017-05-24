import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Filter from '../components/filter';
import * as filterActions from '../actions/filter';

class FilterContainer extends Component {
  render() {
    return (
      <Filter {...this.props}/>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(filterActions, dispatch);
}

export default connect(null, mapDispatchToProps)(FilterContainer);
