import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';

function App() {
    return (
        <Router>
            <div className="App">
                <div className="content">
                <Routes>
                    <Route exact path="/">
                        <Register />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>
                </Routes>
            </div>
        </div>
        </Router>
  );
}

export default App;