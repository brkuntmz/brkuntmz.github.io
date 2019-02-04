import "@babel/polyfill";
import React from "react";
import { render } from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { deepOrange, amber } from "@material-ui/core/colors";

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

// code splitting attempt to reduce bundle size
import(/* webpackChunkName: "app" */ "./App").then(({ default: App }) =>
  render(
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>,
    document.getElementById("root")
  )
);
