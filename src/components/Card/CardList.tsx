import React from "react";
import { Container, Grid } from "@mui/material";
import PageCard from "./Card";

export default function CardList(props: { cards: Array<number> }) {
  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      <Grid container spacing={4}>
        {props.cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <PageCard />
          </Grid>
        ))}
      </Grid>
    </Container>

  );
}
