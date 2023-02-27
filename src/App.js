import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import ProfileSelect from './components/ProfileSelect';
import Register from './components/Register';

function App(props) {
  const [profile, setCurrentProfile] = useState(null);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route path="/home/*" element={<Home profile={profile} setCurrentProfile={setCurrentProfile} />} />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;

