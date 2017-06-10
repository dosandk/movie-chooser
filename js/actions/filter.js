import {FILTER_REQUEST_STARTED, FILTER_REQUEST_FINISHED, FILTER_REQUEST_ERROR} from '../constants/filter';
import {showLoader, hideLoader} from './loader';
import {get} from '../utils/fetch';
import queryString from 'query-string';

export {
  filterRequestStarted,
  filterRequestFinished,
  filterRequestError,
  searchMovies
};

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
    payload: {
      error
    }
  };
}

function searchMovies() {
  const query = {
    api_key: process.env.OMDB_API_KEY,
    language: 'en-US',
    page: 1
  };

  const api = `https://api.themoviedb.org/3/movie/popular?${queryString.stringify(query)}`;

  return dispath => {
    dispath(filterRequestStarted());
    dispath(showLoader());
    return get(api)
      .then(response => {
        return response.json()
          .then(data => {
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
