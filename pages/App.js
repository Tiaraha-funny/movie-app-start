import React from "react";
import { PropTypes } from "prop-types";
import { Counter } from "./Counter";
import { Accordion } from "./Accordion";
import { Input } from "./Input";
import { MovieList } from "./MovieList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <MovieList />
      <Input />
      <Counter />
      <Accordion />
      <header className="App-header">
        <HelloWorld name="Petah" greeting="Yo" />
        <HelloWorld name="Jeannie" />
      </header>
    </div>
  );
}

function HelloWorld({ greeting = "Hello", name }) {
  return (
    <div>
      {greeting} {name}!
    </div>
  );
}
HelloWorld.propTypes = {
  name: PropTypes.string,
  greeting: PropTypes.string,
};

export default App;
