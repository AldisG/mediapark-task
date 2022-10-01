import { createTheme } from "@mui/material/styles";
import { amber, grey } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
import { motion } from "framer-motion";
import Header from "./components/Header";
// import axios from "axios";
// import { useEffect } from "react";
import GallerySection from "./components/GallerySection";
import SearchForm from "./components/SearchForm";

const initialLoad = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

// const testKey = process.env.REACT_APP_API_KEY;
// npm i --save unsplash-js

// import { createApi } from 'unsplash-js';
// import nodeFetch from 'node-fetch';

// const unsplash = createApi({
//   accessKey: 'MY_ACCESS_KEY',
//   fetch: nodeFetch,
// });
const App = () => {
  // useEffect(() => {
  //   axios
  //     .get(
  //       "https://api.unsplash.com/photos/" + process.env.REACT_APP_ACCESS_KEY
  //     )
  //     .then((res) => console.log(res));
  // }, []);

  const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      },
      secondary: {
        main: amber[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        variants={initialLoad}
        initial={initialLoad.start}
        animate={initialLoad.end}
        className="App"
      >
        <Header />
        <SearchForm />
        <GallerySection />
      </motion.div>
    </ThemeProvider>
  );
};

export default App;
