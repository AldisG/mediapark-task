import { AppBar, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Home = () => {
  const apiKey = process.env.REACT_APP_API_URL;
  return (
    <AppBar color={"primary"}>
      <Box display="flex" gap={1}>
        <MenuItem>{apiKey}</MenuItem>
      </Box>
    </AppBar>
  );
};

export default Home;
