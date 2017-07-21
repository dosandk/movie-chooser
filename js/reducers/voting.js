import {MOVIE_ITEM_LIKE, MOVIE_ITEM_DISLIKE} from '../constants/movieItem';
import {PREVIOUS_VOTING_STATE, NEXT_VOTING_STATE} from '../constants/votingHistory';
import {MOVIE_ITEM_SELECT_MOVIE} from '../constants/movieItem';
import {FILTER_REQUEST_SUCCESS} from '../constants/filter';

export default {
  [MOVIE_ITEM_LIKE]: (state, {payload}) => {
    const newChosenMoviesArray = state.votingHistory[state.currentVotingIndex].chosenMovies.slice();

    newChosenMoviesArray.push(state.allMovies.findIndex(item => item.id === payload.movieId));
    const newAllMoviesVotingHistory = state.votingHistory[state.currentVotingIndex].allMovies.slice();
    const newVotingHistoryArray = state.votingHistory.filter((item, index) => index <= state.currentVotingIndex);

    newVotingHistoryArray.push(Object.assign(
      {},
      state.votingHistory[state.currentVotingIndex],
      {
        chosenMovies: newChosenMoviesArray,
        allMovies: newAllMoviesVotingHistory
      }
    ));

    return Object.assign(
      {},
      state,
      {
        currentVotingIndex: state.currentVotingIndex + 1,
        votingHistory: newVotingHistoryArray
      }
    );
  },
  [MOVIE_ITEM_DISLIKE]: (state, {payload}) => {
    const dislikeItemIndex = state.allMovies.findIndex(item => item.id === payload.movieId);
    const newChosenMoviesArray = state.votingHistory[state.currentVotingIndex].chosenMovies.filter(item => item !== dislikeItemIndex);

    newChosenMoviesArray.splice(state.allMovies.findIndex(item => item.id === payload.movieId), 1);
    const newAllMoviesVotingHistory = state.votingHistory[state.currentVotingIndex].allMovies.filter(item => item !== dislikeItemIndex);
    const newVotingHistoryArray = state.votingHistory.filter((item, index) => index <= state.currentVotingIndex);

    newVotingHistoryArray.push(Object.assign(
      {},
      {
        chosenMovies: newChosenMoviesArray,
        allMovies: newAllMoviesVotingHistory,
        selectedMovie: state.votingHistory[state.currentVotingIndex].selectedMovie.id === payload.movieId ? state.allMovies[newAllMoviesVotingHistory[0]] : state.votingHistory[state.currentVotingIndex].selectedMovie
      }
    ));

    return Object.assign(
      {},
      state,
      {
        currentVotingIndex: state.currentVotingIndex + 1,
        votingHistory: newVotingHistoryArray
      }
    );
  },
  [PREVIOUS_VOTING_STATE]: state => {
    return Object.assign({}, state, {currentVotingIndex: state.currentVotingIndex - 1});
  },
  [NEXT_VOTING_STATE]: state => {
    return Object.assign({}, state, {currentVotingIndex: state.currentVotingIndex + 1});
  },
  [MOVIE_ITEM_SELECT_MOVIE]: (state, {payload}) => {
    return Object.assign(
      {},
      state,
      {
        votingHistory: state.votingHistory.map((item, index) => {
          if (index !== state.currentVotingIndex) {
            return item;
          }
          return Object.assign({}, item, {selectedMovie: payload.movie});
        })
      }
      );
  },
  [FILTER_REQUEST_SUCCESS]: (state, {payload}) => {
    return Object.assign(
      {},
      {
        allMovies: payload.movies.results,
        currentVotingIndex: 0,
        isVotingFinished: false,
        votingHistory: [
          {
            allMovies: [...payload.movies.results.keys()],
            chosenMovies: [],
            selectedMovie: payload.movies.results[0]
          }
        ],
      }
      );
  }
};
