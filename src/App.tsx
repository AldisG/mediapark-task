import { motion } from "framer-motion";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import GallerySection from "./components/GallerySection";
import SearchForm from "./components/SearchForm";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { initialPhotoList, setUnsafeApiKey } from "./store/photoApiCalls";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./components/theme/theme";
import PhotoCounter from "./components/util/PhotoCounter";
import { defaultPhotoDataFetch } from "./components/funcs/axiosCalls";
import ApiError from "./components/util/ApiError";

const initialLoad = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const App = () => {
  const setInitialPhotoList = useSetRecoilState(initialPhotoList);
  const customApiKey = useRecoilValue(setUnsafeApiKey);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    defaultPhotoDataFetch(setInitialPhotoList, customApiKey, setApiError);
  }, [customApiKey]);

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
        {apiError ? <ApiError /> : <GallerySection />}
      </motion.div>
    </ThemeProvider>
  );
};

export default App;
