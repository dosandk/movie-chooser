import {MOVIES_COLLECTION_REQUEST_STARTED, MOVIES_COLLECTION_REQUEST_SUCCESS, MOVIES_COLLECTION_REQUEST_ERROR} from '../constants/moviesCollections';

export {
  collectionRequestStarted,
  collectionRequestFinished,
  collectionRequestError
};

function collectionRequestStarted() {
  return {
    type: MOVIES_COLLECTION_REQUEST_STARTED
  };
}

function collectionRequestFinished(collections) {
  return {
    type: MOVIES_COLLECTION_REQUEST_SUCCESS,
    payload: collections
  };
}

function collectionRequestError(error) {
  return {
    type: MOVIES_COLLECTION_REQUEST_ERROR,
    payload: error
  };
}
