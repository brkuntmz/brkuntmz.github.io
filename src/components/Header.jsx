import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "./Exercises/Dialog.jsx";

const styles = theme => ({
  appBar: {
    display: "flex",
    flex: 1
  }
});

const Header = ({ classes }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" color="inherit" className={classes.appBar}>
          Exercise DB
        </Typography>
        <Dialog />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
