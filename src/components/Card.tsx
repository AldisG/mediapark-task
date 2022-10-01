import { Grid, Box } from "@mui/material";
import picDummy from "./pic.jpg";
import { useState } from "react";

const Card = () => {
  const [activeHover, setActiveHover] = useState(false);
  const handleClick = () => console.log("Clicked on pic: src:...");
  const CustomBox = (child: any) => (
    <Box
      sx={{
        overflow: "hidden",
        transition: "scale .3s, box-shadow .3s, outline .3s",
        zIndex: 1,
        p: 1,
        "&:hover": activeHover
          ? {
              scale: "1.05",
              zIndex: 10,
            }
          : "",
      }}
    >
      {child}
    </Box>
  );
  return (
    <Grid
      onMouseLeave={() => setActiveHover(false)}
      onMouseEnter={() => setActiveHover(true)}
      onClick={handleClick}
      item
      xs={6}
      sm={4}
      md={3}
      sx={{ cursor: "pointer" }}
    >
      {CustomBox(<img src={picDummy} alt="pic" width="100%" />)}
    </Grid>
  );
};

export default Card;
