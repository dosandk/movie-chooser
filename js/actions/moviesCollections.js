import {MOVIES_COLLECTION_REQUEST_STARTED, MOVIES_COLLECTION_REQUEST_SUCCESS, MOVIES_COLLECTION_REQUEST_ERROR} from '../constants/moviesCollections';
// import {showLoader, hideLoader} from './loader';
// import {get} from '../utils/fetch';

export {
  collectionRequestStarted,
  collectionRequestFinished,
  collectionRequestError
  // getCollections
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

// function getCollections() {
//   const api = '../api/movies.mock.js';

//   return dispatch => {
//     dispatch(collectionRequestStarted());
//     dispatch(showLoader());
//     get(api)
//     .then(response => {
//       if (response.status !== 200) return Promise.reject(response);

//       return response.json()
//         .then(data => {
//           dispatch(hideLoader());
//           return dispatch(collectionRequestFinished(data));
//         });
//     })
//         .catch(error => {
//           dispatch(hideLoader());

//           return error.text().then(text => dispatch(collectionRequestError(text)));
//         });
//   };
// }
