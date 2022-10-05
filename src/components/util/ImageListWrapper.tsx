import { FC, useEffect, useState } from "react";
import { Box, ImageList } from "@mui/material";

type P = {
  children: React.ReactNode[];
};
const getViewW = () => {
  const { innerWidth: width } = window;
  return width;
};

const muiBreakPoints = [
  { size: 0 },
  { size: 600 },
  { size: 900 },
  { size: 1200 },
  { size: 1536 },
];

const ImageListWrapper: FC<P> = ({ children }) => {
  const [w, setw] = useState(0);
  const [decideColCount, setdecideColCount] = useState(1);

  useEffect(() => {
    const handleResize = () => setw(getViewW());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const calcColCount = () => {
    muiBreakPoints.forEach(({ size }, index: number, muiBreakPoints) => {
      const lastItem = () => {

        if (muiBreakPoints[index + 1]) {
          return muiBreakPoints[index + 1].size;
        }
        return muiBreakPoints[index - 1].size;
      };
      if (w > size && w < lastItem()) {
        setdecideColCount(index + 1);
      } else if (w > size && w > lastItem()) {
        setdecideColCount(muiBreakPoints.length);
      }
    });
  };

  useEffect(() => {
    calcColCount();
  }, [w]);

  return (
    <Box width="100%">
      <ImageList
        variant="masonry"
        cols={decideColCount}
        sx={{ px: 3, py: 1 }}
      >
        {children}
      </ImageList>
    </Box>
  );
};

export default ImageListWrapper;
