import {
  MuiThemeProvider,
  createGenerateClassName
} from "@material-ui/core/styles";
import express from "express";
import reload from "reload";
import { SheetsRegistry } from "jss";
import React from "react";
import { renderToString } from "react-dom/server";
import JssProvider from "react-jss/lib/JssProvider";
import App from "./App";
import theme from "./theme";

const app = express();
const PORT = 9100;
const dev = process.env.NODE_ENV === "development";

app.use(express.static("public"));

if (dev) {
  reload(app);
}

app.use((req, res) => {
  const registry = new SheetsRegistry();
  const generateClassName = createGenerateClassName();
  const sheetsManager = new Map();

  const html = renderToString(
    <JssProvider registry={registry} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
        <App />
      </MuiThemeProvider>
    </JssProvider>
  );

  const css = registry.toString();

  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8" />
            <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <title>Exercise DB</title>
            <style id="jss-styles">${css}</style>
        </head>
        <body>
            <div id="root">${html}</div>
            <script src="main.js" async></script>
           ${dev ? `<script src="/reload/reload.js.js" async />` : ""}
        </body>
        </html>
    `);
});

app.listen(PORT, (req, res) => {
  console.log(`Server started listening on ${PORT}`);
});
