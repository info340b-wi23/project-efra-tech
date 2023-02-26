import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Navbar from './components/Navbar';

function App(props) {
  return (
    <div>
      <head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="author" content="Kush, Efra, Yusuf, Carl"/>
        <meta name="description" content="application for improving family interation"/>
        <title>Family folks</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
        <link rel="stylesheet" href="css/index.css"/>
      </head>

      <main>
        <Router>
          <Routes>
            <Route exact path="/" element={<Register/>} />
            <Route path="/home/*" element={<Home/>} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;



