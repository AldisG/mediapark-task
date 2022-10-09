import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import LightButton from "./util/LightButton";
import { currentPageNumber, searchPhotoList, totalAmountOfPics } from "../store/photoApiCalls";
import { useRecoilValue, useSetRecoilState } from "recoil";
import CommonWrapper from "./util/CommonWrapper";
import {
  setStorageItems,
} from "./funcs/storeActions";
import { fetchPhotoData } from "./funcs/axiosCalls";

const SearchForm = () => {
  const [inputText, setInputText] = useState("");

  const setTotalAmountOfPics = useSetRecoilState(totalAmountOfPics);
  const setSearchPhotoList = useSetRecoilState(searchPhotoList);

  const currentPage = useRecoilValue(currentPageNumber);
  const setCurrentPage = useSetRecoilState(currentPageNumber)
  // todo: on timer, show 5 auto complete suggestions

  const handleChange = (
    input: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInputText(input.target.value);
  };

  const handleClick = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    if (inputText) {
      setCurrentPage(1)
      fetchPhotoData(
        setSearchPhotoList,
        setTotalAmountOfPics,
        setStorageItems,
        currentPage,
        inputText
      );
    }
  };

  const handleSelectText = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const target = e.target as HTMLInputElement;
    target.select();
  };

  useEffect(() => {
    if (inputText) {
      fetchPhotoData(
        setSearchPhotoList,
        setTotalAmountOfPics,
        setStorageItems,
        currentPage,
        inputText
      );
    }
  }, [currentPage]);

  return (
    <CommonWrapper>
      <form onSubmit={handleClick}>
        <FormControl>
          <InputLabel htmlFor="my-input">Search photos</InputLabel>
          <Input
            id="search-input"
            aria-describedby="Search for photos!"
            placeholder="Rainy day"
            value={inputText}
            onChange={handleChange}
            onClick={handleSelectText}
          />
          <FormHelperText id="search-input-helper-text" sx={{ opacity: 0.6 }}>
            You can find all kinds of photos here!
          </FormHelperText>
          {/* Suggestions goes here */}
        </FormControl>
      </form>

      <LightButton inputText={inputText} handleClick={handleClick}>
        <BsSearch size={18} />
      </LightButton>
    </CommonWrapper>
  );
};

export default SearchForm;
