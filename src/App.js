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
import { useState, useCallback } from 'react';

let lightTheme = createTheme({
  typography: {
    fontFamily: ['Inter', 'Source Sans Pro'].join(','),
    p: {
      fontFamily: 'Inter',
      color: '#191b1e',
    },
    h4: {
      fontWeight: '700',
      color: '#1C0742',
    },
  },
});
lightTheme = responsiveFontSizes(lightTheme);

let darkTheme = createTheme({
  typography: {
    fontFamily: ['Inter', 'Source Sans Pro'].join(','),
    p: {
      fontFamily: 'Inter',
      color: '#F0F2FA',
    },
    h4: {
      fontWeight: '700',
      color: '#e8528c',
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);

function App() {
  const contactRef = useRef(null);
  const journeyRef = useRef(null);
  const projectsRef = useRef(null);
  const learningRef = useRef(null);
  const aboutRef = useRef(null);

  const [light, setLight] = useState(true);
  const handleToggle = useCallback(() => {
    setLight(!light);
  }, [light]);

  return (
    <div className='App' id={light ? "light" : "dark"}>
      <ThemeProvider theme={light ? lightTheme : darkTheme}>
        <Header
          contactRef={contactRef}
          journeyRef={journeyRef}
          projectsRef={projectsRef}
          learningRef={learningRef}
          aboutRef={aboutRef}
          onToggle={handleToggle}
        ></Header>
        <Home contactRef={contactRef} ref={aboutRef}></Home>
        <Journey ref={journeyRef}></Journey>
        <Projects ref={projectsRef}></Projects>
        <Learning ref={learningRef}></Learning>
        <Contact ref={contactRef}></Contact>
      </ThemeProvider>
    </div>
  );
}

export default App;
