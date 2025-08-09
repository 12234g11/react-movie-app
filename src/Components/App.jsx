import React from 'react';
import '../App.css';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Home/Home';
import ItemDetailes from './ItemDetailes/ItemDetailes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="itemdetailes/:id/:media_type" element={<ItemDetailes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
