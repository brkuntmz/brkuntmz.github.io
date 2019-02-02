import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Dialog from "./Exercises/Dialog";

const Header = ({ bodyParts, onExerciseCreate }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="headline" color="inherit" style={{ flex: 1 }}>
          Exercise DB
        </Typography>
        <Dialog bodyParts={bodyParts} onSubmit={onExerciseCreate} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
