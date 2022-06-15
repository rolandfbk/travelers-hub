import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets/Rockets';
import Navbar from './components/Navbar';
import './App.css';
import Missions from './components/Missions';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/My Profile" element={<MyProfile />} />
      </Routes>
    </>
  );
}

export default App;
