import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import LightButton from "./util/LightButton";
import axios from "axios";
import { searchPhotoList, totalAmountOfPics } from "../store/photoApiCalls";
import { useSetRecoilState } from "recoil";
import CommonWrapper from "./util/CommonWrapper";
import {
  initializeLocalStorage,
  locStorageItems,
  setStorageItems,
} from "./funcs/storeActions";
// import { initializeLocalStorage, locStorageItems } from "./funcs/storeActions";

const SearchForm = () => {
  const [inputText, setInputText] = useState("");

  const setTotalAmountOfPics = useSetRecoilState(totalAmountOfPics);
  const setSearchPhotoList = useSetRecoilState(searchPhotoList);

  // make adaptive
  const currentPage = 1;
  // todo: on timer, show 5 auto complete suggestions

  const handleChange = (
    input: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInputText(input.target.value);
  };

  const handleClick = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=${currentPage}&query=${inputText}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      )
      .then(({ data }) => {
        const { total, total_pages, results } = data;
        setSearchPhotoList(results);
        setTotalAmountOfPics({ totalPics: total, totalPages: total_pages });
      });
    setStorageItems(inputText);
    setInputText("");
  };

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
          />
          <FormHelperText id="search-input-helper-text" sx={{ opacity: 0.6 }}>
            You can find all kinds of photos here!
          </FormHelperText>
        </FormControl>
      </form>

      <LightButton inputText={inputText} handleClick={handleClick}>
        <BsSearch size={18} />
      </LightButton>
    </CommonWrapper>
  );
};

export default SearchForm;
