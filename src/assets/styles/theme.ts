import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#91D683",
    },
    secondary: {
      main: "#EF778D",
    },
    background: {
      default: "#F0F0F0",
    },
    text: {
      primary: "#4D4D4D",
    },
  },
  overrides: {
    MuiTypography: {
      h1: {
        fontFamily: '"Paytone One", sans-serif;',
      },
      h2: {
        fontFamily: '"Paytone One", sans-serif;',
      },
      h3: {
        fontFamily: '"Paytone One", sans-serif;',
      },
      h4: {
        fontFamily: '"Paytone One", sans-serif;',
      },
      h5: {
        fontFamily: '"Paytone One", sans-serif;',
      },
      h6: {
        fontFamily: '"Paytone One", sans-serif;',
      },
    },
  },
});

export default theme;
