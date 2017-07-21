import {MOVIE_ITEM_SELECT_MOVIE} from '../constants/movieItem';

export default {
  [MOVIE_ITEM_SELECT_MOVIE]: (state, {payload}) => {
    return payload.movie;
  }
};
