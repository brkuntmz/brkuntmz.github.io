import "@babel/polyfill";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { amber, deepOrange } from "@material-ui/core/colors";
import React from "react";
import { render } from "react-dom";
import App from "./App";

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
    secondary: amber,
    type: "dark"
  },
  spacing: {
    unit: 10
  }
});

render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
