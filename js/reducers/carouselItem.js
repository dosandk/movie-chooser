import {CAROUSEL_ITEM_REQUEST_FINISHED} from '../constants/carouselItem';

export default {
  [CAROUSEL_ITEM_REQUEST_FINISHED]: (state, {payload}) => {
    return payload.movie;
  }
};
