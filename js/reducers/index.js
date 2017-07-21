import { combineReducers } from 'redux';
import loader from './loader';
import moviesCollections from './moviesCollections';
import voting from './voting';
import { createReducers } from '../utils/createReducers';
import { routerReducer } from 'react-router-redux';

const reducers = {
  loader,
  moviesCollections,
  voting
};
const rootReducer = combineReducers(Object.assign({}, createReducers(reducers), { router: routerReducer }));

export default rootReducer;
