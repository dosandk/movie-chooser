import { SHOW_LOADER, HIDE_LOADER } from '../constants/loader';
import { showLoader, hideLoader } from './loader';

describe('Loader::actions', () => {
  it('should dispatch an action to start loading', () => {
    const expectedAction = {
      type: SHOW_LOADER,
      payload: true
    };

    expect(showLoader()).toEqual(expectedAction);
  });

  it('should dispatch an action to finish loading', () => {
    const expectedAction = {
      type: HIDE_LOADER,
      payload: false
    };

    expect(hideLoader()).toEqual(expectedAction);
  });
});
