import {
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";
import LightButton from "./util/LightButton";
// import { useEffect } from "react";
import axios from "axios";
import { searchPhotoList, totalAmountOfPics } from "../store/photoApiCalls";
import { useSetRecoilState } from "recoil";

const SearchForm = () => {
  const [inputText, setInputText] = useState("");

  const setTotalAmountOfPics = useSetRecoilState(totalAmountOfPics);
  const setSearchPhotoList = useSetRecoilState(searchPhotoList);

  // todo: on timer, show 5 auto complete suggestions
  // todo: remember search queries you entered - local storage
  // use RecoilJs to submit amount of items found and display in another component

  const handleChange = (
    input: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInputText(input.target.value);
  };

  // `https://api.unsplash.com/search/photos?page1&query=${inputText}&client_id=${process.env.REACT_APP_ACCESS_KEY}; rel="first", https://api.unsplash.com/search/photos?page2&query=${inputText}&client_id=${process.env.REACT_APP_ACCESS_KEY}; rel="last"`
  const handleClick = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault()
    axios
      .get(
        `https://api.unsplash.com/search/photos?page1&query=${inputText}&client_id=${process.env.REACT_APP_ACCESS_KEY}`
      )
      .then(({ data }) => {
        const { total, total_pages, results } = data;
        console.log(data);
        setSearchPhotoList(results);
        setTotalAmountOfPics({ totalPics: total, totalPages: total_pages });
      });
    setInputText("");
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", alignItems: "center", py: 3, gap: 2 }}
    >
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
    </Container>
  );
};

export default SearchForm;
