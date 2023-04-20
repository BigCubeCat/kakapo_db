import * as React from 'react';

import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './components/Info/Header';
import Footer from './components/Info/Footer';
import Graph from './components/Graph/Graph';
import CardList from './components/Card/CardList';

const cards = [1, 2, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme} >
      <Box>
        <Header />
        <Box>
          <Graph />
          <CardList cards={cards} />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

