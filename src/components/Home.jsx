import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Calendar from './Calendar';
import CookBook from './CookBook';
import PhotoAlbum from './PhotoAlbum';
import ProfileSelect from './ProfileSelect';
import Header from './Header';
import PhotoGallery from './PhotoGallery';
import HomePage from './HomePage';

function Home({profile, setCurrentProfile}) {
  return (
    <div className="App">
      <div className="content">
        <Header profile={profile}/>
        <Routes>
          <Route path="/" element={<Navigate to="/home/calendar" />} />
          <Route path="/home-page" element={<HomePage />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/photo-album" element={<PhotoAlbum />} />
          <Route path="/cook-book" element={<CookBook />} />
          <Route path="/profile-select" element={<ProfileSelect setCurrentProfile={setCurrentProfile} />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;



