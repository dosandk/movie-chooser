import movies from '../api/movies.mock';
movies.results.length = 10;

const initialStore = {
  moviesCollections: movies.results,
  voting: {
    allMovies: movies.results,
    currentVotingIndex: 0,
    isVotingFinished: false,
    votingHistory: [
      {
        allMovies: [...movies.results.keys()],
        chosenMovies: [],
        selectedMovie: movies.results[0],
      }
    ],
  },

  favouriteMovies: []
};

export default initialStore;
