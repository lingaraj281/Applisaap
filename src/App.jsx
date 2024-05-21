import React from 'react';
import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import { NavBar } from './components/NavBar';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      {/* Hello */}
    </>
  );
}

export default App;
