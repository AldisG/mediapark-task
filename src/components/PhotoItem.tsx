import { CardActions, Card, CardMedia } from "@mui/material";
import { FC, useState } from "react";
import { Photo } from "../types/types";
import CardCloseup from "./CardCloseup";

type P = {
  item: Photo;
};

const PhotoItem: FC<P> = ({ item }) => {
  const { urls } = item;
  const [openWindow, setopenWindow] = useState(false);
  const handleOpenWindow = () => setopenWindow(true);
  const handleCloseWindow = () => setopenWindow(false);

  return (
    <>
      <Card
        elevation={5}
        onClick={() => handleOpenWindow()}
        sx={{
          maxWidth: "100%",
          height: "max-content",
        }}
      >
        <CardActions
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
      <CardCloseup handleCloseWindow={handleCloseWindow} openWindow={openWindow} item={item} />
    </>
  );
};

export default PhotoItem;
