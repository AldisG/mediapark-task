import {
  Grid,
  Box,
  CardActions,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import picDummy from "./pic.jpg";
import { FC, useState } from "react";
import { Photo } from "../types/types";

type P = {
  item: Photo;
};

const PhotoItem: FC<P> = ({ item }) => {
  const [activeHover, setActiveHover] = useState(false);

  const handleClick = () => console.log("Clicked on pic: src:...");
  const { urls } = item;

  return (
    <Card
      elevation={5}
      sx={{
        maxWidth: "100%",
        height: "max-content",
      }}
    >
      <CardActions
        onMouseLeave={() => setActiveHover(false)}
        onMouseEnter={() => setActiveHover(true)}
        onClick={handleClick}
        // item
        // xs={6}
        // sm={4}
        // md={3}
        sx={{
          cursor: "pointer",
          transition: "scale .3s",
          "&:hover": {
            scale: "1.1",
          },
        }}
      >
        <CardMedia
          component="img"
          height="auto"
          image={urls.small}
          alt="view?"
        />
      </CardActions>
    </Card>
  );
};

export default PhotoItem;

// <Grid
// onMouseLeave={() => setActiveHover(false)}
// onMouseEnter={() => setActiveHover(true)}
// onClick={handleClick}
// item
// xs={6}
// sm={4}
// md={3}
// sx={{ cursor: "pointer" }}
// >
// {CustomBox(<img src={urls.small} alt="pic" width="100%" />)}
// </Grid>
