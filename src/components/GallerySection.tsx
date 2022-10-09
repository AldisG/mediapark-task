import { useRecoilValue } from "recoil";
import { initialPhotoList, searchPhotoList } from "../store/photoApiCalls";
import LoadingContent from "./util/LoadingContent";
import ImageListWrapper from "./util/ImageListWrapper";
import NoItemsFound from "./util/NoItemsFound";

const GallerySection = () => {
  const list = useRecoilValue(initialPhotoList);
  const searchList = useRecoilValue(searchPhotoList);

// fix this
  if (!list && !searchList) {
    return <NoItemsFound />;
  }

  if (searchList && searchList.length > 0) {
    return <ImageListWrapper items={searchList} />;
  }

  return (
    <>
      {list && !searchList && (
        <ImageListWrapper items={list} />
      )}
    </>
  );
};

export default GallerySection;