import { atom } from "recoil";
import { Photo } from "../types/types";

export const initialPhotoList = atom<undefined | Photo[]>({
  key: "initialPhotoList", // unique ID (with respect to other atoms/selectors)
  default: undefined, // default value (aka initial value)
});

export const totalAmountOfPics = atom<{
  totalPics: number;
  totalPages: number;
}>({
  key: "totalAmountOfPics",
  default: { totalPics: 0, totalPages: 0 },
});

export const searchPhotoList = atom<undefined | Photo[]>({
  key: "searchPhotoList",
  default: undefined,
});

export const currentPageNumber = atom({
  key: "currentPageNumber",
  default: 1,
});