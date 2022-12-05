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
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Header></Header>
        <Home contactRef={contactRef}></Home>
        <Journey></Journey>
        <Learning></Learning>
        <Contact contactRef={contactRef}></Contact>
      </ThemeProvider>
    </div>
  );
}

export default App;
