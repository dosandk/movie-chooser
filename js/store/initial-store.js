import movies from '../api/movies.mock';

const initialStore = {
  favoriteMovies: [],
  moviesCollections: [movies],
  movies: {
    Search: []
  },
  selectedMovie: {
    Title: '',
    Poster: null
  }
};

export default initialStore;
