import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Login from '../components/login';
import * as loginActions from '../actions/login';

class LoginContainer extends Component {
  render() {
    return (
      <div>
        <Login {...this.props} />
      </div>
    );
  }
}

const mapActionsToProps = dispatch => bindActionCreators(loginActions, dispatch);

export default connect(null, mapActionsToProps)(LoginContainer);
