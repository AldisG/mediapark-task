import { Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { totalAmountOfPics } from "../../store/photoApiCalls";
import CommonWrapper from "./CommonWrapper";

const PhotoCounter = () => {
  const { totalPics, totalPages } = useRecoilValue(totalAmountOfPics);
  return (
    <Container maxWidth="lg" sx={{ py: totalPics > 0 ? 1 : 0 }}>
      {totalPics > 0 ? (
        <Typography variant="body1" component="p">
          {totalPics} photos / {totalPages} pages
        </Typography>
      ) : (
        ""
      )}
    </Container>
  );
};

export default PhotoCounter;
