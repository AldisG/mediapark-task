import { Button } from "@mui/material";
import { FC } from "react";

type P = {
    inputText: string; handleClick: () => void; children: React.ReactNode;}

const LightButton: FC<P> = ({ inputText, handleClick, children }) => {
  return (
    <Button
      disabled={!inputText}
      variant="outlined"
      color="secondary"
      sx={{ width: "100px", py: 1 }}
      title="Search"
      onClick={handleClick}
      type="submit" 
    >
      {children}
    </Button>
  );
};

export default LightButton;
