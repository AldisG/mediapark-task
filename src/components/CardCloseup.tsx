import {
  Box,
  Button,
  Card,
  CardMedia,
  Dialog,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { Photo } from "../types/types";

type P = {
  item: Photo;
  openWindow: boolean;
  handleCloseWindow: () => void;
};

const CardCloseup: FC<P> = ({ item, openWindow, handleCloseWindow }) => {
  const { description, urls, alt_description, id } = item;

  return (
    <>
      <Dialog
        open={openWindow}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="lg"
        onClose={handleCloseWindow}
      >
        <Box
          sx={{
            p: 2,
            display: "grid",
            justifyContent: "center",
            gap: 1,
            position: "relative",
          }}
        >
          {description && (
            <Typography variant="h4" fontWeight="bold">
              {description}
            </Typography>
          )}
          {alt_description && (
            <Typography variant="body2">{alt_description}</Typography>
          )}
          <Card elevation={5}>
              <CardMedia
                component="img"
                height="auto"
                image={urls.regular}
                alt={alt_description || `photo ID: ${id}`}
              />
          </Card>

          <Typography variant="body2">
            To downlad - rightclick on photo and select "Save image as"
          </Typography>
          <Button
            sx={{
              fontWeight: "bold",
              position: "absolute",
              top: 0,
              right: 0,
              borderRadius: "100px",
            }}
            onClick={handleCloseWindow}
            color="secondary"
            autoFocus
          >
            <AiFillCloseCircle size={50} />
          </Button>
        </Box>
      </Dialog>
    </>
  );
};

export default CardCloseup;
