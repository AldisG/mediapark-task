import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { FC, useState } from "react";

type P = {
  children: React.ReactNode;
};

const CardCloseup: FC<P> = ({ children }) => {
  const [openWindow, setopenWindow] = useState(false);
  const handleOpenWindow = () => setopenWindow(!openWindow);
  return (
    <Box onClick={handleOpenWindow}>
      {children}
      <Dialog
        open={openWindow}
        onClose={handleOpenWindow}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Title of the photo</DialogTitle>
        <Button onClick={handleOpenWindow} autoFocus>
          X
        </Button>
      </Dialog>
    </Box>
  );
};

export default CardCloseup;
