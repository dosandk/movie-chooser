import {FILTER_REQUEST_STARTED, FILTER_REQUEST_FINISHED, FILTER_REQUEST_ERROR} from '../constants/filter';
import * as filterActions from './filter';

describe('Filter::actions', () => {
  it('should dispatch an action FILTER_REQUEST_STARTED', () => {
    const expectedAction = {
      type: FILTER_REQUEST_STARTED,
    };

    expect(filterActions.filterRequestStarted()).toEqual(expectedAction);
  });

  it('should dispatch an action FILTER_REQUEST_FINISHED', () => {
    const movies = [
      { name: 'Lorem ipsum' },
      { name: 'dolor sit' }
    ];
    const expectedAction = {
      type: FILTER_REQUEST_FINISHED,
      payload: {
        movies
      }
    };

    expect(filterActions.filterRequestFinished(movies)).toEqual(expectedAction);
  });

  it('should dispatch an action FILTER_REQUEST_ERROR', () => {
    const error = 'Error: server error occurs';
    const expectedAction = {
      type: FILTER_REQUEST_ERROR,
      payload: {
        error
      }
    };

    expect(filterActions.filterRequestError(error)).toEqual(expectedAction);
  });
});
