import React from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import Navbar from './components/Navbar';
import About from './pages/About';
import Education from './pages/Education';
import Work from './pages/Work';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Social from './components/Social';
import Spacer from './components/Spacer';

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <div>
        <About />
        <Spacer space={5} />
        <Work />
        <Spacer space={5} />
        <Projects />
        <Spacer space={5} />
        <Education />
        <Spacer space={5} />
        <Contact />
        <Spacer space={5} />
        <Social />
      </div>
    </div>
  );
}
