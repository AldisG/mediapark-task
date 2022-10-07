import { FC, useEffect, useState } from "react";
import { Box, ImageList, ImageListItem } from "@mui/material";
import { motion } from "framer-motion";
import PhotoItem from "../PhotoItem";
import NoItemsFound from "./NoItemsFound";
import { Photo } from "../../types/types";

type P = {
  items: Photo[];
};

const muiBreakPoints = [
  { size: 0 },
  { size: 600 },
  { size: 900 },
  { size: 1200 },
  { size: 1536 },
];

const ImageListWrapper: FC<P> = ({ items }) => {
  const getViewW = () => {
    const { innerWidth: width } = window;
    return width;
  };
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

  useEffect(() => {
    setw(getViewW());
    calcColCount();
  }, []);

  const initialLoad = {
    start: { opacity: 0 },
    end: { opacity: 1 },
  };

  return (
    <motion.div
      variants={initialLoad}
      initial={initialLoad.start}
      animate={initialLoad.end}
    >
      {items ? (
        <Box width="100%">
          <ImageList
            variant="masonry"
            cols={decideColCount}
            sx={{ px: 3, py: 1 }}
          >
            {items.map((item) => (
              <ImageListItem key={item.id}>
                <PhotoItem item={item} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      ) : (
        <NoItemsFound />
      )}
    </motion.div>
  );
};

export default ImageListWrapper;
