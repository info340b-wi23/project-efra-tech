import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Calendar from './Calendar';
import CookBook from './CookBook';
import PhotoAlbum from './PhotoAlbum';
import ProfileSelect from './ProfileSelect';

function Home() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <div className="content">
        <Routes>
          <Route path="/" element={<Navigate to="/calendar" />} />
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



