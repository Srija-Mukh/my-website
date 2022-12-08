import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './components/Home';
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles/';
import Contact from './components/Contact';
import { useRef } from 'react';
import Learning from './components/Learning';
import Journey from './components/Journey';
import Projects from './components/Projects';

let theme = createTheme({
  typography: {
    fontFamily: ['Inter', 'Source Sans Pro'].join(','),
    p: {
      fontFamily: 'Inter',
    },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  const contactRef = useRef(null);
  const journeyRef = useRef(null);
  const projectsRef = useRef(null);
  const learningRef = useRef(null);
  const aboutRef = useRef(null);

  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Header contactRef={contactRef} journeyRef={journeyRef} projectsRef={projectsRef} learningRef={learningRef} aboutRef={aboutRef}></Header>
        <Home contactRef={contactRef} ref={aboutRef}></Home>
        <Journey ref={journeyRef}></Journey>
        <Projects ref={projectsRef} ></Projects>
        <Learning ref={learningRef}></Learning>
        <Contact ref={contactRef}></Contact>
      </ThemeProvider>
    </div>
  );
}

export default App;
