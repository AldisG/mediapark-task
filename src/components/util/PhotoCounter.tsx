import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useRecoilValue } from "recoil";
import { totalAmountOfPics } from "../../store/photoApiCalls";

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
