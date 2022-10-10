import { FormControl, FormHelperText, Input, InputLabel } from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect, FC } from "react";
import LightButton from "./util/LightButton";
import {
  currentPageNumber,
  searchPhotoList,
  setUnsafeApiKey,
  totalAmountOfPics,
} from "../store/photoApiCalls";
import { useRecoilValue, useSetRecoilState } from "recoil";
import CommonWrapper from "./util/CommonWrapper";
import { setStorageItems } from "./funcs/storeActions";
import { fetchPhotoData } from "./funcs/axiosCalls";
import SuggestSearchQueries from "./util/SuggestSearchQueries";

type P = {
  setApiError: (value: boolean) => void
}

const SearchForm: FC<P> = ({ setApiError }) => {
  const [inputText, setInputText] = useState("");
  const [randomAtParent, setrandomAtParent] = useState<boolean>(false);
  const [showSuggestions, setshowSuggestions] = useState(false)
  
  const setTotalAmountOfPics = useSetRecoilState(totalAmountOfPics);
  const setSearchPhotoList = useSetRecoilState(searchPhotoList);
  const customApiKey = useRecoilValue(setUnsafeApiKey);

  const currentPage = useRecoilValue(currentPageNumber);
  const setCurrentPage = useSetRecoilState(currentPageNumber);

  const handleClickedText = ((value: string) => {
    setInputText(value)
  })

  const handleChange = (
    input: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInputText(input.target.value);
  };

  const handleClick = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setrandomAtParent(prev => !prev)
    if (inputText) {
      setCurrentPage(1);
      fetchPhotoData(
        setSearchPhotoList,
        setTotalAmountOfPics,
        setStorageItems,
        currentPage,
        inputText,
        customApiKey,
        setApiError
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
        inputText,
        customApiKey,
        setApiError
      );
    }
  }, [currentPage, customApiKey]);

  return (
    <CommonWrapper>
      <form onSubmit={handleClick}>
        <FormControl sx={{ position: 'relative '}}>
          <InputLabel htmlFor="my-input">Search photos</InputLabel>
          <Input
            id="search-input"
            aria-describedby="Search for photos!"
            placeholder="Rainy day"
            value={inputText}
            onChange={handleChange}
            onClick={handleSelectText}
            onFocus={() => setshowSuggestions(true)}
            onBlur={() => setshowSuggestions(false)}
          />
          <FormHelperText id="search-input-helper-text" sx={{ opacity: 0.6 }}>
            You can find all kinds of photos here!
          </FormHelperText>
          {showSuggestions && <SuggestSearchQueries randomAtParent={randomAtParent}/>}
        </FormControl>
      </form>

      <LightButton inputText={inputText} handleClick={handleClick} >
        <BsSearch size={18} />
      </LightButton>
    </CommonWrapper>
  );
};

export default SearchForm;
