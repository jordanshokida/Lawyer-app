import React from 'react';
import { BrowserRouter } from 'react-router';
import RouterApp from './routing/RouterApp';
import RoutesComponent from './routing/RoutesComponent';

const App = () => (
  <BrowserRouter>
    <RouterApp />
    <RoutesComponent />
  </BrowserRouter>
);

export default App;
