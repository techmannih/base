import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Upload from '../pages/Upload/Upload';

function MainRoutes({ darkMode }) {
  return (
    <Routes>
      <Route path="/" element={<Home darkMode={darkMode} />} />
      <Route
        path="/upload"
        element={<Upload darkMode={darkMode} />} 
      />
    </Routes>
  );
}

export default MainRoutes;
