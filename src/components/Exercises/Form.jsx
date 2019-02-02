import React, { Component } from "react";

import {
  Button,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  TextField
} from "@material-ui/core";

import { withStyles } from "@material-ui/core";

const styles = theme => ({
  formControl: {
    width: 500
  }
});

class Form extends Component {
  state = this.getInitState();

  handleChange = ({ target: { value } }, name) => {
    this.setState({
      [name]: value
    });
  };

  handleCreateExercise = () => {
    // Validate input

    const { title } = this.state;
    this.props.onSubmit({
      ...this.state,
      id: title.toLocaleLowerCase().replace(/ /g, "-")
    });

    this.setState({
      open: false
    });
  };

  getInitState() {
    const { exercise } = this.props;
    console.log(exercise);
    return exercise
      ? exercise
      : {
          title: "",
          description: "",
          muscles: ""
        };
  }

  render() {
    const { muscles, title, description } = this.state;
    const { classes, muscles: bodyParts } = this.props;

    return (
      <form>
        <TextField
          label="Set a title"
          value={title}
          onChange={e => this.handleChange(e, "title")}
          margin="normal"
          className={classes.formControl}
        />
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="muscles">Muscles</InputLabel>
          <Select
            value={muscles}
            onChange={e => this.handleChange(e, "muscles")}
          >
            {bodyParts.map(m => (
              <MenuItem value={m} key={m}>
                {m}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <TextField
          label="Describe the exercise"
          multiline
          rows="5"
          value={description}
          onChange={e => this.handleChange(e, "description")}
          margin="normal"
          className={classes.formControl}
        />
        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleCreateExercise}
        >
          create
        </Button>
      </form>
    );
  }
}

export default withStyles(styles)(Form);
