import {FILTER_REQUEST_SUCCESS} from '../constants/filter';

export default {
  [FILTER_REQUEST_SUCCESS]: (state, {payload}) => {
    return payload.movies;
  }
};
