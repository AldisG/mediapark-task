import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRecoilValue } from "recoil";
import { totalAmountOfPics } from "../../store/photoApiCalls";
import PageSwitcherWrapper from "./PageSwitcherWrapper";

const PhotoCounter = () => {
  const { totalPics } = useRecoilValue(totalAmountOfPics);

  return (
    <>
    {totalPics > 0 ? (
    <Box sx={{display: 'grid', justifyContent: 'center', textAlign: 'center', gap: 1}}>
      <PageSwitcherWrapper />
      <Typography component="p" variant="caption" color="#33333366">
        {`Found ${totalPics} photo${totalPics > 1 ? "s" : ''}`}
      </Typography>
    </Box>
    ) : ''}
    </>
  );
};

export default PhotoCounter;
