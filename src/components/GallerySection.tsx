// import { useEffect } from "react";
import { Box, ImageListItem } from "@mui/material";
import PhotoItem from "./PhotoItem";
import { useRecoilValue } from "recoil";
import { initialPhotoList, searchPhotoList } from "../store/photoApiCalls";
import LoadingContent from "./util/LoadingContent";
import NoItemsFound from "./util/NoItemsFound";
import ImageListWrapper from "./util/ImageListWrapper";

const GallerySection = () => {
  const list = useRecoilValue(initialPhotoList);
  const searchList = useRecoilValue(searchPhotoList);
  // if (searchList && searchList?.length === 0) {
  //   return <NoItemsFound />;
  // }
  if (!list && !searchList) {
    return <LoadingContent />;
  }
  // can be refactored into 2 layer statement
  if (searchList) {
    return (
      <>
        {searchList.length > 0 ? (
          <ImageListWrapper>
            {searchList.map((item) => (
              <ImageListItem key={item.id}>
                <PhotoItem item={item} />
              </ImageListItem>
            ))}
          </ImageListWrapper>
        ) : (
          <NoItemsFound />
        )}
      </>
    );
  }
  return (
    <>
      {list && [].length > 0 ? (
        <ImageListWrapper>
          {list.map((item) => (
            <ImageListItem key={item.id}>
              <PhotoItem item={item} />
            </ImageListItem>
          ))}
        </ImageListWrapper>
      ) : (
        <NoItemsFound />
      )}
    </>
  );
};

export default GallerySection;

// <Grid container p={2} gap={1} width="100%">
// {searchList
//   ? searchList.map((item) => <PhotoItem item={item} />)
//   : list?.map((item) => <PhotoItem item={item} />)}
// </Grid>
