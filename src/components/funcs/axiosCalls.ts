import axios from "axios";
import { Photo } from "../../types/types";

type PhotosCount = {
  totalPics: number;
  totalPages: number;
};

export const fetchPhotoData = (
  setSearchPhotoList: (value: Photo[]) => void,
  setTotalAmountOfPics: (value: PhotosCount) => void,
  setStorageItems: (value: string) => void,
  currentPage: number,
  inputText: string
) => {
  if (inputText) {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${currentPage}&query=${inputText}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      )
      .then(({ data }) => {
        console.log(data);
        const { total, total_pages, results } = data as any;
        setSearchPhotoList(results);
        setTotalAmountOfPics({ totalPics: total, totalPages: total_pages });
      });
    if (inputText) {
      setStorageItems(inputText);
    }
  }
};

export const defaultPhotoDataFetch = (setInitialPhotoList: (data: Photo[]) => void) => {
  axios
  .get(
    `https://api.unsplash.com/photos?page=2&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  )
  .then(({ data }) => {
    setInitialPhotoList(data);
  });
}