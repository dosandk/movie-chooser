import React from 'react';
import PropTypes from 'prop-types';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import styles from './votingHistory.scss';

const VotingHistory = ({currentVotingIndex, lastVotingIndex, goBackHandler, goForwardHandler}) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.arrow} ${currentVotingIndex === 0 ? styles.disabled : ''}`} onClick={goBackHandler}>
        <NavigationArrowBack/>
      </div>
      <div className={`${styles.arrow} ${currentVotingIndex === lastVotingIndex ? styles.disabled : ''}`} onClick={goForwardHandler}>
        <NavigationArrowForward/>
      </div>
    </div>
  );
};

VotingHistory.propTypes = {
  currentVotingIndex: PropTypes.number.isRequired,
  goBackHandler: PropTypes.func.isRequired,
  goForwardHandler: PropTypes.func.isRequired,
  lastVotingIndex: PropTypes.number.isRequired
};

export default VotingHistory;
