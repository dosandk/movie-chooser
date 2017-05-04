import {FILTER_REQUEST_STARTED, FILTER_REQUEST_FINISHED, FILTER_REQUEST_ERROR} from '../constants/filter';
import {showLoader, hideLoader} from './loader';
import {get} from '../utils/fetch';

function filterRequestStarted() {
  return {
    type: FILTER_REQUEST_STARTED
  };
}

function filterRequestFinished(movies) {
  return {
    type: FILTER_REQUEST_FINISHED,
    payload: {
      movies
    }
  };
}

function filterRequestError(error) {
  return {
    type: FILTER_REQUEST_ERROR,
    payload: error
  };
}

export function searchMovies() {
  return dispath => {
    dispath(filterRequestStarted());
    dispath(showLoader());
    return get('http://www.omdbapi.com/?t=Walking+Dead&y=2012&plot=full')
      .then(response => {
        return response.json()
          .then(data => {
            console.log('response:', data);
            dispath(hideLoader());
            return dispath(filterRequestFinished(data));
          });
      })
      .catch(error => {
        dispath(hideLoader());
        return dispath(filterRequestError(error));
      });
  };
}
