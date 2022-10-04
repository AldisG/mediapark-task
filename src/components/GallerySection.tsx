// import { useEffect } from "react";
import { Grid } from "@mui/material";
import Card from "./Card";
import { useRecoilValue } from "recoil";
import { initialPhotoList, searchPhotoList } from "../store/photoApiCalls";
import LoadingContent from "./util/LoadingContent";
import NoItemsFound from "./util/NoItemsFound";

const GallerySection = () => {
  const list = useRecoilValue(initialPhotoList);
  const searchList = useRecoilValue(searchPhotoList);
  // list?.length === 0 && 

  if (searchList && searchList?.length === 0) {
    return <NoItemsFound />;
  }
  if (!list && !searchList) {
    return <LoadingContent />;
  }

  return (
    <Grid container p={2} spacing={1} width="100%">
      {searchList
        ? searchList.map((item) => <Card item={item} />)
        : list?.map((item) => <Card item={item} />)}
    </Grid>
  );
};

export default GallerySection;
