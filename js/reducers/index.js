import { combineReducers } from 'redux';
import loader from './loader';
import moviesCollections from './moviesCollections';
import votingHistory from './votingHistory';
import currentVotingIndex from './votingIndex';
import allMovies from './allMovies';
import { createReducers } from '../utils/createReducers';
import { routerReducer } from 'react-router-redux';

const reducers = {
  allMovies,
  currentVotingIndex,
  loader,
  moviesCollections,
  votingHistory
};
const rootReducer = combineReducers(Object.assign({}, createReducers(reducers), { router: routerReducer }));

export default rootReducer;
