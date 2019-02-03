import React, { Component } from "react";

import {
  Button,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
  TextField
} from "@material-ui/core";

class Form extends Component {
  state = this.getInitState();

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

  handleChange = ({ target: { value } }, name) => {
    this.setState({
      [name]: value
    });
  };

  handleCreateExercise = () => {
    // Validate input

    const { title } = this.state;
    this.props.onSubmit({
      id: title.toLocaleLowerCase().replace(/ /g, "-"),
      ...this.state
    });
  };

  render() {
    const { muscles, title, description } = this.state;
    const { exercise, muscles: bodyParts } = this.props;

    return (
      <form>
        <TextField
          label="Set a title"
          value={title}
          onChange={e => this.handleChange(e, "title")}
          margin="normal"
          fullWidth
        />
        <br />
        <FormControl fullWidth>
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
          fullWidth
        />
        <br />
        <Button
          variant="contained"
          color="secondary"
          onClick={this.handleCreateExercise}
          disabled={!title || !muscles}
        >
          {exercise ? "Edit" : "Create"}
        </Button>
      </form>
    );
  }
}

export default Form;
