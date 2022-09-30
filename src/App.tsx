import { createTheme } from "@mui/material/styles";
import { amber, grey } from "@mui/material/colors";
import { ThemeProvider } from "@emotion/react";
import { motion } from "framer-motion";
import Home from "./components/Home";

const initialLoad = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const testKey = process.env.REACT_APP_API_KEY;

const App = () => {
  console.log(testKey);
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

  const test = process.env.REACT_APP_API_URL;

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        variants={initialLoad}
        initial={initialLoad.start}
        animate={initialLoad.end}
        className="App"
      >
        <div className="App">env: {test}...</div>
        <Home />
      </motion.div>
    </ThemeProvider>
  );
};

export default App;
