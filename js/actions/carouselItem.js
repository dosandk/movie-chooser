import {CAROUSEL_ITEM_REQUEST_STARTED, CAROUSEL_ITEM_REQUEST_FINISHED, CAROUSEL_ITEM_ERROR} from '../constants/carouselItem';
import {showLoader, hideLoader} from './loader';
import {get} from '../utils/fetch';

function movieItemRequestStarted() {
  return {
    type: CAROUSEL_ITEM_REQUEST_STARTED
  };
}

function movieItemRequestFinished(movie) {
  return {
    type: CAROUSEL_ITEM_REQUEST_FINISHED,
    payload: {
      movie
    }
  };
}

function movieItemRequestError(error) {
  return {
    type: CAROUSEL_ITEM_ERROR,
    payload: error
  };
}

export function getMovie(id) {
  return dispath => {
    dispath(movieItemRequestStarted());
    dispath(showLoader());
    return get(`http://www.omdbapi.com/?i=${id}&plot=full`)
      .then(response => {
        return response.json()
          .then(data => {
            dispath(hideLoader());
            return dispath(movieItemRequestFinished(data));
          });
      })
      .catch(error => {
        dispath(hideLoader());
        return dispath(movieItemRequestError(error));
      });
  };
}

