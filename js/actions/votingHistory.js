import {PREVIOUS_VOTING_STATE, NEXT_VOTING_STATE} from '../constants/votingHistory';

export {
  votingBack,
  votingForward
};

function votingBack() {
  return {
    type: PREVIOUS_VOTING_STATE
  };
}

function votingForward() {
  return {
    type: NEXT_VOTING_STATE
  };
}
