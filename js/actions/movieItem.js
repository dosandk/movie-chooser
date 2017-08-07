import {MOVIE_ITEM_LIKE, MOVIE_ITEM_DISLIKE, MOVIE_ITEM_SELECT_MOVIE} from '../constants/movieItem';

export {
  movieLike,
  movieDislike,
  selectMovie
};

function movieLike(movieId) {
  return (dispatch, getState) => {
    const store = getState();

    dispatch({
      type: MOVIE_ITEM_LIKE,
      payload: {
        movieId,
        currentVotingIndex: store.currentVotingIndex
      }
    });
  };
}

function movieDislike(movieId) {
  return (dispatch, getState) => {
    const store = getState();

    dispatch({
      type: MOVIE_ITEM_DISLIKE,
      payload: {
        movieId,
        currentVotingIndex: store.currentVotingIndex
      }
    });
  };
}

function selectMovie(movieId) {
  return (dispatch, getState) => {
    const store = getState();

    dispatch({
      type: MOVIE_ITEM_SELECT_MOVIE,
      payload: {
        movieId,
        currentVotingIndex: store.currentVotingIndex
      }
    });
  };
}
