import React from 'react';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Calendar from './Calendar';
import CookBook from './CookBook';
import PhotoAlbum from './PhotoAlbum';
import ProfileSelect from './ProfileSelect';

function Home() {
  return (
        <Router>
        <h1>Hello</h1>
        <div className="App">
            <div className="content">
            <Routes>
                <Route exact path="/calendar">
                    <Calendar/>
                </Route>
                <Route path="/photo-album">
                    <PhotoAlbum/>
                </Route>
                <Route path="/cook-book">
                    <CookBook/>
                </Route>
                <Route path="/profile-select">
                    <ProfileSelect/>
                </Route>
            </Routes>
            </div>
        </div>
        </Router>
  );
}

export default Home;