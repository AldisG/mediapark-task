import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { Photo } from "../types/types";

export const initialPhotoList = atom<undefined | Photo[]>({
  key: "initialPhotoList", // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});

export const totalAmountOfPics = atom<{
  totalPics: number;
  totalPages: number;
}>({
  key: "totalAmountOfPics", // unique ID (with respect to other atoms/selectors)
  default: { totalPics: 0, totalPages: 0 },
});

export const searchPhotoList = atom<undefined | Photo[]>({
  key: "searchPhotoList", // unique ID (with respect to other atoms/selectors)
  default: undefined,
});
// Link: <https://api.unsplash.com/search/photos?page=1&query=office>; rel="first", <https://api.unsplash.com/search/photos?page=1&query=office>; rel="prev", <https://api.unsplash.com/search/photos?page=3&query=office>; rel="last", <https://api.unsplash.com/search/photos?page=3&query=office>; rel="next"
