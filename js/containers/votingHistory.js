import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import VotingHistory from '../components/votingHistory';
import * as historyActions from '../actions/votingHistory';

class VotingHistoryContainer extends Component {
  render() {
    return (
      <VotingHistory
        goBackHandler={this.props.actions.votingBack}
        goForwardHandler={this.props.actions.votingForward}
      />
    );
  }
}

VotingHistoryContainer.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(historyActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(VotingHistoryContainer);
