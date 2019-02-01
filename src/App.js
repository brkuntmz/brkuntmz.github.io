import React, { Component, Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Exercises from "./components/Exercises";
import { exercises, muscles } from "./store";

class App extends Component {
  state = {
    exercises,
    exercise: {}
  };

  getExercisesByBodyPart() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;

        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];

        return exercises;
      }, {})
    );
  }

  handleSelectedCategory = category => {
    this.setState({
      category
    });
  };

  handleSelectedExercise = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };

  render() {
    const exercises = this.getExercisesByBodyPart();
    const { category, exercise } = this.state;

    return (
      <Fragment>
        <Header />
        <Exercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleSelectedExercise}
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
