import { combineReducers } from 'redux';
import loader from './loader';
import filter from './filter';
import carouselItem from './carouselItem';
import moviesCollections from './moviesCollections';
import { createReducers } from '../utils/createReducers';
import { routerReducer } from 'react-router-redux';

const reducers = {
  loader,
  movies: filter,
  selectedMovie: carouselItem,
  moviesCollections
};
const rootReducer = combineReducers(Object.assign({}, createReducers(reducers), { router: routerReducer }));

export default rootReducer;
