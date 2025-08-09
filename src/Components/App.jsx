import React from 'react';
import '../App.css';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Home/Home';

import ItemDetailes from './ItemDetailes/ItemDetailes';

let routers = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="home" /> },
      { path: 'home', element: <Home /> },
      { path: 'itemdetailes/:id/:media_type', element: <ItemDetailes /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;
