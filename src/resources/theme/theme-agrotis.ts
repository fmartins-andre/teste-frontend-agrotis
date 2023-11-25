import { createTheme, ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#00796b",
    },
    secondary: {
      main: "#00796b",
    },
    error: {
      main: "#d32f2f",
    },
  },
  shape: {
    borderRadius: 0,
  },
};

export const themeAgrotis = createTheme(themeOptions);
