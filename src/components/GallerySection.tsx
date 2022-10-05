// import { useEffect } from "react";
import {
  Box,
  Card,
  Grid,
  ImageList,
  ImageListItem,
  ImageListTypeMap,
} from "@mui/material";
import PhotoItem from "./PhotoItem";
import { useRecoilValue } from "recoil";
import { initialPhotoList, searchPhotoList } from "../store/photoApiCalls";
import LoadingContent from "./util/LoadingContent";
import NoItemsFound from "./util/NoItemsFound";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { FC } from "react";

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
  if (searchList) {
    return (
      <Box width="100%">
        <ImageList variant="masonry" cols={3}>
          {searchList.map((item) => (
            <ImageListItem key={item.id}>
              <PhotoItem item={item} />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    );
  }
  return (
    <Box width="100%">
      <ImageList variant="masonry" cols={3}>
        {list
          ? list.map((item) => (
              <ImageListItem key={item.id}>
                <PhotoItem item={item} />
              </ImageListItem>
            ))
          : ""}
      </ImageList>
    </Box>
  );
};

export default GallerySection;

// <Grid container p={2} gap={1} width="100%">
// {searchList
//   ? searchList.map((item) => <PhotoItem item={item} />)
//   : list?.map((item) => <PhotoItem item={item} />)}
// </Grid>
