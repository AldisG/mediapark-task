import {
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from "@mui/material";
import { BsSearch } from "react-icons/bs";
import { useState } from "react";

const SearchForm = () => {
  const [inputText, setInputText] = useState("");
  // todo: on timer, show 5 auto complete suggestions
  // todo: remember search queries you entered - local storage
  // use RecoilJs to submit amount of items found and display in another component
  const handleChange = (
    input: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setInputText(input.target.value);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{ display: "flex", alignItems: "center", py: 3, gap: 2 }}
    >
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
      <Button
        disabled={!inputText}
        variant="outlined"
        color="secondary"
        sx={{ width: "100px", py: 1 }}
      >
        <BsSearch size={18} />
      </Button>
    </Container>
  );
};

export default SearchForm;
