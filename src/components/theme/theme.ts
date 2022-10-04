import { createTheme } from "@mui/material/styles";
import { amber, grey } from "@mui/material/colors";

  export const theme = createTheme({
    palette: {
      primary: {
        main: grey[900],
      },
      secondary: {
        main: amber[500],
      },
    },
  });
