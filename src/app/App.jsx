import React from 'react';
import routes from './app.route';
import { RouterProvider } from 'react-router';


const App = function () {
  return (<RouterProvider router={routes} /> );
}

export default App;
