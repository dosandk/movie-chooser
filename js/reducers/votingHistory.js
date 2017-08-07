import {MOVIE_ITEM_LIKE, MOVIE_ITEM_DISLIKE} from '../constants/movieItem';
import {MOVIE_ITEM_SELECT_MOVIE} from '../constants/movieItem';
import {FILTER_REQUEST_SUCCESS} from '../constants/filter';

export default {
  [MOVIE_ITEM_LIKE]: (state, {payload}) => {
    const newChosenMoviesArray = state[payload.currentVotingIndex].chosenMovies.concat(payload.movieId);
    const newAllMoviesVotingHistory = state[payload.currentVotingIndex].allMovies.slice();
    let newVotingHistoryArray = state.filter((item, index) => index <= payload.currentVotingIndex);

    newVotingHistoryArray = newVotingHistoryArray.concat({...state[payload.currentVotingIndex], chosenMovies: newChosenMoviesArray, allMovies: newAllMoviesVotingHistory});

    return newVotingHistoryArray;
  },
  [MOVIE_ITEM_DISLIKE]: (state, {payload}) => {
    const allCurrentMovies = state[payload.currentVotingIndex].allMovies;
    const newChosenMoviesArray = state[payload.currentVotingIndex].chosenMovies.filter(item => item !== payload.movieId);
    const newAllMoviesVotingHistory = allCurrentMovies.filter(item => item !== payload.movieId);
    let newSelectedMovie;

    // define new selected movie
    if (state[payload.currentVotingIndex].selectedMovie === payload.movieId) { // selected movie has been disliked
      const selectedMovieIndex = allCurrentMovies.indexOf(payload.movieId);

      if (selectedMovieIndex >= 0 && selectedMovieIndex < allCurrentMovies.length - 1) { // if disliked index isn't last get next one item as new selected
        newSelectedMovie = allCurrentMovies[selectedMovieIndex + 1];
      } else { // if disliked index is last get fist item as new selected
        newSelectedMovie = allCurrentMovies[0];
      }
    } else { // other movie has been disliked
      newSelectedMovie = state[payload.currentVotingIndex].selectedMovie;
    }


    let newVotingHistoryArray = state.filter((item, index) => index <= payload.currentVotingIndex);

    newVotingHistoryArray = newVotingHistoryArray.concat({...{}, chosenMovies: newChosenMoviesArray, allMovies: newAllMoviesVotingHistory, selectedMovie: newSelectedMovie});

    return newVotingHistoryArray;
  },
  [MOVIE_ITEM_SELECT_MOVIE]: (state, {payload}) => {
    return state.map((item, index) => {
      if (index !== payload.currentVotingIndex) {
        return item;
      }
      return {...item, selectedMovie: payload.movieId};
    });
  },
  [FILTER_REQUEST_SUCCESS]: (state, {payload}) => {
    return [
      {
        allMovies: [...payload.movies.results.keys()],
        chosenMovies: [],
        selectedMovie: payload.movies.results[0]
      }
    ];
  }
};
