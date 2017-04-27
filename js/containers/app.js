import React from 'react';
import Index from '../components/index';
import LoaderContainer from './loader';

const App = ({ children }) => (
  <div>
    <Index />
    { children }
    <LoaderContainer />
  </div>
);

export default App;
