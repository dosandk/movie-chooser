import {MOVIES_COLLECTION_REQUEST_SUCCESS} from '../constants/moviesCollections';

export default {
  [MOVIES_COLLECTION_REQUEST_SUCCESS]: (state, {payload}) => {
    return payload.collections;
  }
};
