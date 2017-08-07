import {MOVIE_ITEM_LIKE, MOVIE_ITEM_DISLIKE} from '../constants/movieItem';
import {PREVIOUS_VOTING_STATE, NEXT_VOTING_STATE} from '../constants/votingHistory';
import {FILTER_REQUEST_SUCCESS} from '../constants/filter';

export default {
  [MOVIE_ITEM_LIKE]: state => {
    return state + 1;
  },
  [MOVIE_ITEM_DISLIKE]: state => {
    return state + 1;
  },
  [PREVIOUS_VOTING_STATE]: state => {
    return state - 1;
  },
  [NEXT_VOTING_STATE]: state => {
    return state + 1;
  },
  [FILTER_REQUEST_SUCCESS]: () => {
    return 0;
  }
};
