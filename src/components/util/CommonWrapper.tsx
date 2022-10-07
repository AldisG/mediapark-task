import { Box } from "@mui/system";
import { FC } from "react";

type P = {
  children: React.ReactNode;
};

const CommonWrapper: FC<P> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", px: 3, pt: 2, gap: 2 }}>
      {children}
    </Box>
  );
};

export default CommonWrapper;
