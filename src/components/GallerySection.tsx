import { Grid, Box } from "@mui/material";
import React from "react";
import picDummy from "./pic.jpg";

const CustomBox = (child: any) => (
  <Box
    sx={{
      bgcolor: "#ddd",
      overflow: "hidden",
      p: 2,
      boxShadow: "4px 4px 8px #33333399",
    }}
  >
    {child}
  </Box>
);

const GallerySection = () => {
  return (
    <Grid container p={2} spacing={2} width="100vw">
      <Grid item xs={3}>
        {CustomBox(<img src={picDummy} alt="pic" width="100%" />)}
      </Grid>
      <Grid item xs={3}>
        {CustomBox(<img src={picDummy} alt="pic" width="100%" />)}
      </Grid>
      <Grid item xs={3}>
        {CustomBox(<img src={picDummy} alt="pic" width="100%" />)}
      </Grid>
      <Grid item xs={3}>
        {CustomBox(<img src={picDummy} alt="pic" width="100%" />)}
      </Grid>
      <Grid item xs={3}>
        {CustomBox(<img src={picDummy} alt="pic" width="100%" />)}
      </Grid>
      <Grid item xs={3}>
        {CustomBox(<img src={picDummy} alt="pic" width="100%" />)}
      </Grid>
      <Grid item xs={3}>
        {CustomBox(<img src={picDummy} alt="pic" width="100%" />)}
      </Grid>
    </Grid>
  );
};

export default GallerySection;
