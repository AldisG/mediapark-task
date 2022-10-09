import { Pagination } from "@mui/material";
import { Stack } from "@mui/system";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  currentPageNumber,
  totalAmountOfPics,
} from "../../store/photoApiCalls";

const PageSwitcherWrapper = () => {
  const { totalPages } = useRecoilValue(totalAmountOfPics);
  const setCurrentPage = useSetRecoilState(currentPageNumber);

  return (
    <Stack spacing={2}>
      <Pagination
        onChange={(_, value) => setCurrentPage(value)}
        count={totalPages}
      />
    </Stack>
  );
};

export default PageSwitcherWrapper;
