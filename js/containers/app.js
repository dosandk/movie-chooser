import React from 'react';
import Index from '../components/index';
import LoaderContainer from './loader';
import ServiceWorker from './service-worker';

const App = ({ children }) => (
  <div>
    <Index />
    { children }
    <LoaderContainer />
    <ServiceWorker/>
  </div>
);

export default App;
