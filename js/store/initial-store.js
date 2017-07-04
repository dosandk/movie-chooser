import movies from '../api/movies.mock';

const initialStore = {
  favoriteMovies: [],
  moviesCollections: movies.results,
  movies: {
    Search: []
  },
  selectedMovie: {
    Title: '',
    Poster: null
  }
};

export default initialStore;
