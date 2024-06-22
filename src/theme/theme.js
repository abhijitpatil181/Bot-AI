import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: { main: "#9785BA", light: "#AF9FCD", dark: "#F9FAFA" },
    secondary: { main: "#D7C7F4", light: "#FFFFFF" },
    background: { default: "#FFFFFF " },
    text: {
      primary: "#212121",
      secondary: "#9785BA",
      disabled: "#3c3c3c",
    },
  },
  typography: {
    fontFamily: 'Ubuntu, "Open Sans"',
    body1: {
      fontFamily: 'Ubuntu, "Open Sans"',
      fontWeight: 400,
    },
    h1: {
      fontFamily: 'Ubuntu, "Open Sans"',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Ubuntu, "Open Sans"',
      fontWeight: 400,
    },
    h3: {
      fontFamily: 'Ubuntu, "Open Sans"',
      fontWeight: 400,
    },
  },
  borderWidth: "1px",
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Ubuntu, "Open Sans"',
          fontWeight: 700,
          fontSize: "16px",
          lineHeight: "18.38px",
          color: "#414146",
          minHeight: "2.5rem",
          borderRadius: "10px",
          backgroundColor: "#D7C7F4",
          "&:hover": {
            background: "#D7C7F4",
          },
        },
      },
    },
  },
});

export default theme;
