import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './app';
import MainPage from '../components/mainPage';
import MoviesCollections from '../components/moviesCollections';
import FavoriteMovies from '../components/favoriteMovies';
import Settings from '../components/settings';
import styles from '../../styles/_common.scss';

const Routes = () => {
  return (
    <div className={styles['general-wrapper']}>
      <Route component={ App } />
      <Switch>
        <Route exact={true} path='/' component={ MainPage } />
        <Route path='/collections' component={ MoviesCollections } />
        <Route path='/favorite' component={ FavoriteMovies } />
        <Route path='/settings' component={ Settings } />
      </Switch>
    </div>
  );
};

export default Routes;
