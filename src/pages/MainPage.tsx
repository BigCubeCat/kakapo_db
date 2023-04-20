import React from 'react'

import { Box } from "@mui/material";

import Graph from '../components/Graph/Graph';
import CardList from '../components/Card/CardList';


export const MainPage = (props: {}) => {
  return (
    <Box>
      <Graph />
      <CardList cards={[1, 2, 4]} />
    </Box>
  );
}
