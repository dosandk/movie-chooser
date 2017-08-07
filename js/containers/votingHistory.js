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
        {...this.props}
        goBackHandler={this.props.actions.votingBack}
        goForwardHandler={this.props.actions.votingForward}
      />
    );
  }
}

VotingHistoryContainer.propTypes = {
  actions: PropTypes.object.isRequired,
  currentVotingIndex: PropTypes.number.isRequired,
  lastVotingIndex: PropTypes.number.isRequired
};

function mapStateToProps({currentVotingIndex, votingHistory}) {
  const lastVotingIndex = votingHistory.length - 1;

  return {
    currentVotingIndex,
    lastVotingIndex
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(historyActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(VotingHistoryContainer);
