import { Grid, Box, CircularProgress } from "@mui/material";
import React from "react";
import Card from "./Card";

const GallerySection = () => {
  if (false) {
    return (
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          pt: 10,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
  return (
    <Grid container p={2} spacing={1} width="100%">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
};

export default GallerySection;
