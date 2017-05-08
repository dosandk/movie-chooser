import {FILTER_REQUEST_FINISHED} from '../constants/filter';

export default {
  [FILTER_REQUEST_FINISHED]: (state, {payload}) => {
    return payload.movies;
  }
};
