import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Calendar from './Calendar';
import CookBook from './CookBook';
import PhotoAlbum from './PhotoAlbum';
import ProfileSelect from './ProfileSelect';
import Header from './Header';
import HomePage from './HomePage';

function Home() {
  return (
    <div className="App">
      <div className="content">
        <Header/>
        <Routes>
          <Route path="/" element={<Navigate to="/home/calendar" />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/photo-album" element={<PhotoAlbum />} />
          <Route path="/cook-book" element={<CookBook />} />
          <Route path="/profile-select" element={<ProfileSelect />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;



