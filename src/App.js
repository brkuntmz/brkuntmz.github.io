import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Exercises from "./components/Exercises";
import { exercises, muscles } from "./store";

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
      exercise: {},
      editMode: false
    }));
  };

  render() {
    const exercises = this.getExercisesByBodyPart();
    const { category, exercise, editMode } = this.state;

    return (
      <Fragment>
        <Header
          bodyParts={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercise={exercise}
          muscles={muscles}
          exercises={exercises}
          category={category}
          onSelect={this.handleSelectedExercise}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
          onEdit={this.handleExerciseEdit}
          editMode={editMode}
        />
        <Footer
          muscles={muscles}
          category={category}
          onSelect={this.handleSelectedCategory}
        />
      </Fragment>
    );
  }
}

export default App;
