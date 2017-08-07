import movies from '../api/movies.mock';
movies.results.length = 10;

const initialStore = {
  allMovies: movies.results,
  moviesCollections: movies.results,
  currentVotingIndex: 0,
  votingHistory: [
    {
      allMovies: [...movies.results.map(item => item.id)],
      chosenMovies: [],
      selectedMovie: movies.results[0].id
    }
  ],
  favouriteMovies: []
};

export default initialStore;
