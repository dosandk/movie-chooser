import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import * as votingActions from '../actions/voting';

class PopupContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: false
    };

    this.handleCancel = this.handleCancel.bind(this);
    this.handleOk = this.handleOk.bind(this);
  }

  handleCancel() {
    this.setState({
      opened: false
    });
  }

  handleOk() {
    this.props.actions.finishVoting();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.isVotingFinished) {
      this.setState({
        opened: true
      });
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onTouchTap={this.handleCancel}
      />,
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleOk}
      />
    ];

    return (
      <div>
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.opened}
          title="Current voting is finished. Load next voting portion?"
        />
      </div>
    );
  }
}

PopupContainer.defaultProps = {
  isVotingFinished: false
};

PopupContainer.propTypes = {
  isVotingFinished: PropTypes.bool.isRequired
};

const mapStateToProps = ({voting: {isVotingFinished}}) => {
  return {
    isVotingFinished
  };
};
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(votingActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupContainer);
