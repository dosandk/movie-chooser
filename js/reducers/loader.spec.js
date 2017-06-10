import loader from './loader';
import { createReducer } from '../utils/createReducers';
import { showLoader, hideLoader } from '../actions/loader';

describe('Reducer::Loader', () => {
  const reducer = createReducer(loader);

  it('should handle SHOW_LOADER', () => {
    const result = true;

    expect(reducer(undefined, showLoader())).toEqual(result);
  });

  it('should handle HIDE_LOADER', () => {
    const result = false;

    expect(reducer(undefined, hideLoader())).toEqual(result);
  });
});
