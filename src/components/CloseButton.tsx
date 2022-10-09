import { Button } from "@mui/material";
import { FC } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

type P = {
  handleCloseWindow: () => void;
};

const CloseButton: FC<P> = ({ handleCloseWindow }) => {
  return (
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
  );
};

export default CloseButton;
