import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './app';
import MainPage from '../components/mainPage';
import MoviesCollectionsPage from '../components/moviesCollectionsPage';
import FavoriteMoviesPage from '../components/favoriteMoviesPage';
import SettingsPage from '../components/settingsPage';

const Routes = () => {
  return (
    <div>
      <Route component={ App } />
      <Switch>
        <Route exact path='/' component={ MainPage } />
        <Route path='/my-movies-collections' component={ MoviesCollectionsPage } />
        <Route path='/my-favorite-movies' component={ FavoriteMoviesPage } />
        <Route path='/settings' component={ SettingsPage } />
      </Switch>
    </div>
  );
};

export default Routes;
