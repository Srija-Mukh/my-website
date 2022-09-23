import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
//import Home from './components/Home';
import Home from './components/Home';
import {
  createTheme, responsiveFontSizes, ThemeProvider
} from "@mui/material/styles/";
import Contact from './components/Contact';

let theme = createTheme({
  typography: {
      fontFamily: [
          'Inter', 
          'Source Sans Pro'
      ].join(','),
      p: {
        fontFamily: 'Source Sans Pro',
        fontWeight: '600'
      }
  }
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <Header></Header>
        {/* <Home></Home> */}
        <Home></Home>
        <Contact></Contact>
      </ThemeProvider>
    </div>
  );
}

export default App;
