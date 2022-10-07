import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRecoilValue } from "recoil";
import { totalAmountOfPics } from "../../store/photoApiCalls";
import CommonWrapper from "./CommonWrapper";

const PhotoCounter = () => {
  const { totalPics, totalPages } = useRecoilValue(totalAmountOfPics);
  return (
    <Box>
      <CommonWrapper>
        {totalPics > 0 ? (
          <Typography variant="body1" component="p">
            <b>Found:</b> {totalPics} photos / {totalPages} pages
          </Typography>
        ) : (
          ""
        )}
      </CommonWrapper>
    </Box>
  );
};

export default PhotoCounter;
