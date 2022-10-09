import { motion } from "framer-motion";
import Header from "./components/Header";
import axios from "axios";
import { useEffect } from "react";
import GallerySection from "./components/GallerySection";
import SearchForm from "./components/SearchForm";
import { useSetRecoilState } from "recoil";
import { initialPhotoList } from "./store/photoApiCalls";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./components/theme/theme";
import PhotoCounter from "./components/util/PhotoCounter";

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
  const setInitialPhotoList = useSetRecoilState(initialPhotoList);
  useEffect(() => {
    axios
      .get(
        `https://api.unsplash.com/photos?page=2&client_id=${process.env.REACT_APP_ACCESS_KEY}`,
        {
          headers: {
            "x-per-page": "20",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setInitialPhotoList(res.data);
      });
  }, []);

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
        <PhotoCounter />
        <GallerySection />
      </motion.div>
    </ThemeProvider>
  );
};

export default App;
