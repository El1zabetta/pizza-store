import { Box, Typography } from "@mui/material";
import React from "react";
import Card from "../../components/card/Card";

export default function Searched({ pizzas }) {
  return (
    <Box>
      <Typography className="hp-h1">Все пиццы</Typography>
      <Box className="card-parent">
        {pizzas.map((pizza) => (
          <Card key={pizza.id} product={pizza} />
        ))}
      </Box>
    </Box>
  );
}
