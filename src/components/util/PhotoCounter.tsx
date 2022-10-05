import { Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { totalAmountOfPics } from "../../store/photoApiCalls";
import CommonWrapper from "./CommonWrapper";

const PhotoCounter = () => {
  const { totalPics, totalPages } = useRecoilValue(totalAmountOfPics);
  return (
    <CommonWrapper>
      {totalPics > 0 && (
        <Typography variant="body1" component="p">
          {totalPics} photos / {totalPages} pages
        </Typography>
      )}
    </CommonWrapper>
  );
};

export default PhotoCounter;
