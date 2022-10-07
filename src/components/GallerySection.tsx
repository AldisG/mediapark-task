// import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { initialPhotoList, searchPhotoList } from "../store/photoApiCalls";
import LoadingContent from "./util/LoadingContent";
import ImageListWrapper from "./util/ImageListWrapper";

const GallerySection = () => {
  const list = useRecoilValue(initialPhotoList);
  const searchList = useRecoilValue(searchPhotoList);

  // fix this
  if (!list && !searchList) {
    return <LoadingContent />;
  }

  if (searchList) {
    return <ImageListWrapper items={searchList} />;
  }
  return (
    <>
      {list && (
        <ImageListWrapper items={list} />
      )}
    </>
  );
};

export default GallerySection;