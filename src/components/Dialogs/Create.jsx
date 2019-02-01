import React, { Component, Fragment } from "react";
import AddIcon from "@material-ui/icons/Add";
import {
  Button,
  Fab,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  DialogContentText
} from "@material-ui/core";

export default class Create extends Component {
  state = {
    open: false
  };

  toggleButton = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    return (
      <Fragment>
        <Fab size="small" color="secondary" onClick={this.toggleButton}>
          <AddIcon />
        </Fab>
        <Dialog
          open={this.state.open}
          onClose={this.toggleButton}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">
            Create an Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please create any exercise you'd like
            </DialogContentText>
            <form noValidate />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggleButton} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
