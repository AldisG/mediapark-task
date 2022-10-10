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
  inputText: string,
  customApiKey: string,
  setApiError: (value: boolean) => void
) => {
  if (inputText) {
    const apiKeyDecider = customApiKey
      ? customApiKey
      : process.env.REACT_APP_ACCESS_KEY;
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${currentPage}&query=${inputText}&client_id=${
          apiKeyDecider || ""
        }`
      )
      .then(({ data }) => {
        setApiError(false);

        const { total, total_pages, results } = data as any;
        setSearchPhotoList(results);
        setTotalAmountOfPics({ totalPics: total, totalPages: total_pages });
      })
      .catch(() => {
        setApiError(true);
      });
    if (inputText) {
      setStorageItems(inputText);
    }
  }
};

export const defaultPhotoDataFetch = (
  setInitialPhotoList: (data: Photo[]) => void,
  customApiKey: string,
  setApiError: (value: boolean) => void
) => {
  const apiKeyDecider = customApiKey
    ? customApiKey
    : process.env.REACT_APP_ACCESS_KEY;
  axios
    .get(
      `https://api.unsplash.com/photos?page=2&client_id=${apiKeyDecider || ""}`
    )
    .then(({ data }) => {
      setApiError(false);
      setInitialPhotoList(data);
    })
    .catch(() => {
      // setError and return no data to show
      setApiError(true);
    });
};
