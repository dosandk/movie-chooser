import {PREVIOUS_VOTING_STATE, NEXT_VOTING_STATE, VOTING_FINISHED} from '../constants/votingHistory';

export {
  votingBack,
  votingForward,
  finishVoting
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

function finishVoting() {
  return {
    type: VOTING_FINISHED
  };
}
