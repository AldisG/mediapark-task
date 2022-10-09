
import { AppBar, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import ApiAsigner from "./util/ApiAsigner";

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(true)

  return (
    <AppBar color={"primary"} position="static">
      <Box display="flex" justifyContent="space-between">
        <MenuItem title="Why you are hovering on me?">PicFinder</MenuItem>
        <MenuItem onClick={() => setOpenDrawer(true)}>
          <AiOutlineQuestionCircle size={25} title="Need help?" />
        </MenuItem>
      </Box>
      <ApiAsigner openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </AppBar>
  );
};

export default Header;
