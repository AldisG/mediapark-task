import { Container, Typography } from "@mui/material";
import React from "react";

const ApiError = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", pt: 4 }}>
      <Typography variant="h4" component="p">
        Can't connect to the API... perhaps API key is wrong?
      </Typography>
    </Container>
  );
};

export default ApiError;
