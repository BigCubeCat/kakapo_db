import * as React from 'react';

import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './components/Info/Header';
import Footer from './components/Info/Footer';
import { MainPage } from './pages/MainPage';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <Box>
        <Header />
        <MainPage />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

