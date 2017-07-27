import movies from '../api/movies.mock';
movies.results.length = 10;

const initialStore = {
  moviesCollections: movies.results,
  currentVotingIndex: 0,
  voting: {
    allMovies: movies.results,
    isVotingFinished: false,
    votingHistory: [
      {
        allMovies: [...movies.results.map(item => item.id)],
        chosenMovies: [],
        selectedMovie: movies.results[0].id,
      }
    ]
  },
  favouriteMovies: []
};

export default initialStore;
