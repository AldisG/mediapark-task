import React from "react";
import { Box, CircularProgress } from "@mui/material";

const LoadingContent = () => {
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
};

export default LoadingContent;
