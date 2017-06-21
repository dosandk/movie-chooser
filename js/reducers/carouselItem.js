import {CAROUSEL_ITEM_SELECT_MOVIE} from '../constants/carouselItem';

export default {
  [CAROUSEL_ITEM_SELECT_MOVIE]: (state, {payload}) => {
    return payload.movie;
  }
};
