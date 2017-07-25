import React from 'react';
import Index from '../components/index';
import LoaderContainer from './loader';
import PopupContainer from './popup';

const App = ({ children }) => (
  <div>
    <Index />
    { children }
    <LoaderContainer />
    <PopupContainer />
  </div>
);

export default App;
