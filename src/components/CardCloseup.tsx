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
import CloseButton from "./CloseButton";

type P = {
  item: Photo;
  openWindow: boolean;
  handleCloseWindow: () => void;
};

const CardCloseup: FC<P> = ({ item, openWindow, handleCloseWindow }) => {
  const { description, urls, alt_description, id } = item;

  return (
    <Box>
      <Dialog
        open={openWindow}
        maxWidth="md"
        onClose={handleCloseWindow}
      >
        <Box
          sx={{
            p: 8,
            display: "grid",
            justifyContent: "center",
            gap: 2,
            position: "relative",
          }}
        >
          <Box sx={{ maxWidth: "90%" }}>
            {description && (
              <Typography variant="h4" fontWeight="bold">
                {description}
              </Typography>
            )}
            {alt_description && (
              <Typography variant="body2">{alt_description}</Typography>
            )}
          </Box>
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
        </Box>

        <CloseButton handleCloseWindow={handleCloseWindow} />
      </Dialog>
    </Box>
  );
};

export default CardCloseup;
