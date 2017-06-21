import {CAROUSEL_ITEM_SELECT_MOVIE} from '../constants/carouselItem';

export function selectMovie(movie) {
  return {
    type: CAROUSEL_ITEM_SELECT_MOVIE,
    payload: {
      movie
    }
  };
}

