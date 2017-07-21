import movies from '../api/movies.mock';

const initialStore = {
  moviesCollections: movies.results,
  selectedMovie: {
    Title: '',
    Poster: null
  },
  movies,
  selectedMovie: movies.results[0],
  currentVoting: {
    allMovies: [],
    chosenMovies: []
  },
  isVotingFinished: false,
  votingHistory: {
    [new Date()]: {
      allMovies: [],
      chosenMovies: []
    }
  },
  favouriteMovies: []
};

export default initialStore;
