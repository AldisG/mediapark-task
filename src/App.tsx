import { motion } from "framer-motion";
import Header from "./components/Header";
import { useEffect } from "react";
import GallerySection from "./components/GallerySection";
import SearchForm from "./components/SearchForm";
import { useSetRecoilState } from "recoil";
import { initialPhotoList } from "./store/photoApiCalls";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./components/theme/theme";
import PhotoCounter from "./components/util/PhotoCounter";
import { defaultPhotoDataFetch } from "./components/funcs/axiosCalls";

const initialLoad = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const App = () => {
  const setInitialPhotoList = useSetRecoilState(initialPhotoList);
  useEffect(() => {
    defaultPhotoDataFetch(setInitialPhotoList);
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
