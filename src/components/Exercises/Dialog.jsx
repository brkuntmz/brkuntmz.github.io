import React, { Component, Fragment } from "react";

import Form from "./Form.jsx";
import AddIcon from "@material-ui/icons/Add";
import {
  Fab,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText
} from "@material-ui/core";

import { withContextHOC } from "../../context.jsx";

class Create extends Component {
  state = {
    open: false
  };

  toggleButton = () => {
    this.setState({
      open: !this.state.open
    });
  };

  handleSubmission = exercise => {
    this.toggleButton();
    this.props.onCreate(exercise);
  };

  render() {
    const { open } = this.state;
    const { muscles } = this.props;

    return (
      <Fragment>
        <Fab size="small" color="secondary" onClick={this.toggleButton}>
          <AddIcon />
        </Fab>
        <Dialog
          fullWidth
          maxWidth="xs"
          open={open}
          onClose={this.toggleButton}
          aria-labelledby="max-width-dialog-title"
        >
          <DialogTitle id="max-width-dialog-title">
            Create an Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please create any exercise that'll be addictive!
            </DialogContentText>
            <Form muscles={muscles} onSubmit={this.handleSubmission} />
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}

export default withContextHOC(Create);
