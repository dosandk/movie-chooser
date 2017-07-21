import {MOVIE_ITEM_LIKE, MOVIE_ITEM_DISLIKE, MOVIE_ITEM_SELECT_MOVIE} from '../constants/movieItem';

export {
  movieLike,
  movieDislike,
  selectMovie
};

function movieLike(movieId) {
  return {
    type: MOVIE_ITEM_LIKE,
    payload: {
      movieId
    }
  };
}

function movieDislike(movieId) {
  return {
    type: MOVIE_ITEM_DISLIKE,
    payload: {
      movieId
    }
  };
}

function selectMovie(movie) {
  return {
    type: MOVIE_ITEM_SELECT_MOVIE,
    payload: {
      movie
    }
  };
}
