import {showLoader, hideLoader} from './loader';

export function searchMovies() {
  return dispath => {
    dispath(showLoader());
    setTimeout(() => {
      dispath(hideLoader());
    }, 2000);
  };
}
