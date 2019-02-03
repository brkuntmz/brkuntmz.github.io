import React, { Component, Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Exercises from "./components/Exercises";
import { exercises, muscles } from "./store";
import { Provider } from "./context";

class App extends Component {
  state = {
    exercises,
    exercise: {},
    editMode: false
  };

  getExercisesByBodyPart() {
    const initExercises = muscles.reduce(
      (acc, muscle) => ({
        ...acc,
        [muscle]: []
      }),
      {}
    );

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = [...exercises[muscles], exercise];

        return exercises;
      }, initExercises)
    );
  }

  handleSelectedCategory = category => {
    this.setState({
      category
    });
  };

  handleSelectedExercise = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: false
    }));
  };

  handleExerciseCreate = exercise => {
    let exerciseList = [...this.state.exercises, exercise];

    this.setState({
      exercises: exerciseList
    });
  };

  handleExerciseDelete = id => {
    const newList = this.state.exercises.filter(ex => ex.id !== id);
    this.setState({
      exercises: newList,
      exercise: {},
      editMode: false
    });
  };

  handleExerciseSelectEdit = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }));
  };

  handleExerciseEdit = exercise => {
    this.setState(({ exercises }) => ({
      exercises: [...exercises.filter(ex => ex.id !== exercise.id), exercise],
      exercise
    }));
  };

  getContext = () => ({
    muscles,
    ...this.state,
    exercisesByMuscles: this.getExercisesByBodyPart(),
    onCategorySelect: this.handleSelectedCategory,
    onCreate: this.handleExerciseCreate,
    onEdit: this.handleExerciseEdit,
    onSelectEdit: this.handleExerciseSelectEdit,
    onDelete: this.handleExerciseDelete,
    onSelect: this.handleSelectedExercise
  });

  render() {
    return (
      <Provider value={this.getContext()}>
        <Fragment>
          <CssBaseline />
          <Header />
          <Exercises />
          <Footer />
        </Fragment>
      </Provider>
    );
  }
}

export default App;
