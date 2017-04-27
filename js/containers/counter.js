import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Counter from '../components/counter';
import * as counterActions from '../actions/counter';
import * as loaderActions from '../actions/loader';

class CounterApp extends Component {
  render() {
    return (
      <Counter {...this.props} />
    );
  }
}

const mapStateToProps = ({ counter }) => ({ counter });
const mapActionsToProps = dispatch => bindActionCreators(Object.assign({}, counterActions, loaderActions), dispatch);

export default connect(mapStateToProps, mapActionsToProps)(CounterApp);
