import {FILTER_REQUEST_STARTED, FILTER_REQUEST_SUCCESS, FILTER_REQUEST_ERROR} from '../constants/filter';
import { SHOW_LOADER, HIDE_LOADER } from '../constants/loader';

import * as filterActions from './filter';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Filter::actions', () => {
  const movies = [
    { name: 'Lorem ipsum' },
    { name: 'dolor sit' }
  ];
  const error = 'Error: server error occurs';

  it('should dispatch an action FILTER_REQUEST_STARTED', () => {
    const expectedAction = {
      type: FILTER_REQUEST_STARTED,
    };

    expect(filterActions.filterRequestStarted()).toEqual(expectedAction);
  });

  it('should dispatch an action FILTER_REQUEST_SUCCESS', () => {
    const expectedAction = {
      type: FILTER_REQUEST_SUCCESS,
      payload: {
        movies
      }
    };

    expect(filterActions.filterRequestFinished(movies)).toEqual(expectedAction);
  });

  it('should dispatch an action FILTER_REQUEST_ERROR', () => {
    const expectedAction = {
      type: FILTER_REQUEST_ERROR,
      payload: {
        error
      }
    };

    expect(filterActions.filterRequestError(error)).toEqual(expectedAction);
  });

  it('should dispatch FILTER_REQUEST_SUCCESS for success fetch action', () => {
    const store = mockStore();
    const expectedActions = [
      {
        type: FILTER_REQUEST_STARTED
      },
      {
        type: SHOW_LOADER,
        payload: true
      },
      {
        type: HIDE_LOADER,
        payload: false
      },
      {
        type: FILTER_REQUEST_SUCCESS,
        payload: {
          movies
        }
      }
    ];

    fetch.mockResponseOnce(JSON.stringify(movies), {status: 200});

    return store.dispatch(filterActions.searchMovies())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });

  it('should dispatch FILTER_REQUEST_ERROR for failed fetch action', () => {
    const store = mockStore();
    const expectedActions = [
      {
        type: FILTER_REQUEST_STARTED
      },
      {
        type: SHOW_LOADER,
        payload: true
      },
      {
        type: HIDE_LOADER,
        payload: false
      },
      {
        type: FILTER_REQUEST_ERROR,
        payload: {
          error
        }
      }
    ];

    fetch.mockResponseOnce(error, {status: 400});

    return store.dispatch(filterActions.searchMovies())
      .then(() => expect(store.getActions()).toEqual(expectedActions));
  });
});
