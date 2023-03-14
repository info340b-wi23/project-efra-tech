import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Calendar from './Calendar';
import CookBook from './CookBook';
import PhotoAlbum from './PhotoAlbum';
import ProfileSelect from './ProfileSelect';
import PhotoGallery from './PhotoGallery';
import RecipePage from './RecipePage';
import HomePage from './HomePage';
import Header from './Header';
import Register from './Register';

function Home({ currentProfile }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <div className="content">
        <Header onSearch={handleSearch} currentProfile={currentProfile} />
        <Routes>
          <Route path="/" element={<Navigate to="/home/calendar" />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/photo-album" element={<PhotoAlbum searchQuery={searchQuery} />}/>
          <Route path="/photo-album/:albumName" element={<PhotoGallery />} />
          <Route path="/cook-book" element={<CookBook searchQuery={searchQuery} />} />
          <Route path="/cook-book/:recipeName" element={<RecipePage />} />
          <Route path="/profile-select" element={<ProfileSelect />} />
          <Route path="/photo-gallery" element={<PhotoGallery />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;