import {FILTER_REQUEST_FINISHED} from '../constants/filter';

export default {
  [FILTER_REQUEST_FINISHED]: (state, {payload}) => {
    console.log('payload', payload);
    return payload.movies;
  }
};
