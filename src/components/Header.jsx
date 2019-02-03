import React from "react";
import { AppBar, Toolbar, Typography, withStyles } from "@material-ui/core";
import Dialog from "./Exercises/Dialog";

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
        <Typography
          variant="headline"
          color="inherit"
          className={classes.appBar}
        >
          Exercise DB
        </Typography>
        <Dialog />
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(Header);
