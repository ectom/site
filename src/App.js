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
      <Education/>
      <Spacer space={15}/>
      <Work/>
      <Spacer space={15}/>
      <Projects/>
      <Spacer space={15}/>
      <Contact/>
      <Spacer space={5}/>
      <Social/>
    </div>
  </div>
  );
}
