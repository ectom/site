import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './pages/About';
import Education from './pages/Education';
import Work from "./pages/Work";
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Social from "./components/Social";
import {CssBaseline} from "@material-ui/core";
import Spacer from "./components/Spacer";

export default function App() {
  
  return (
  <div className="App">
    <CssBaseline/>
    <Navbar/>
    <div>
      <About/>
      <Spacer/>
      <Education/>
      <Spacer/>
      <Work/>
      <Spacer/>
      <Projects/>
      <Spacer/>
      <Contact/>
      <Spacer/>
      <Social/>
    </div>
  </div>
  );
}
