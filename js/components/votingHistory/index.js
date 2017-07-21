import React from 'react';
import PropTypes from 'prop-types';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import NavigationArrowForward from 'material-ui/svg-icons/navigation/arrow-forward';
import styles from './votingHistory.scss';

const VotingHistory = ({goBackHandler, goForwardHandler}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.arrow} onClick={goBackHandler}>
        <NavigationArrowBack/>
      </div>
      <div className={styles.arrow} onClick={goForwardHandler}>
        <NavigationArrowForward/>
      </div>
    </div>
  );
};

VotingHistory.propTypes = {
  goBackHandler: PropTypes.func.isRequired,
  goForwardHandler: PropTypes.func.isRequired
};

export default VotingHistory;
