import { AppBar, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { AiOutlineQuestionCircle } from "react-icons/ai";
// import React from "react";

const Home = () => {
  const handleOpenHelpMidal = () => {
    console.log("Create HELP modal!");
  };
  return (
    <AppBar color={"primary"}>
      <Box display="flex" justifyContent="space-between" gap={1}>
        <MenuItem title="Why you are hovering on me?">PicFinder</MenuItem>
        <MenuItem onClick={handleOpenHelpMidal}>
          <AiOutlineQuestionCircle size={25} title="Need help?" />
        </MenuItem>
      </Box>
    </AppBar>
  );
};

export default Home;
