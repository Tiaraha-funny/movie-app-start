import React from "react";
import { Counter } from "./Counter";
import { Accordion } from "./Accordion";
import { Input } from "./Input";
import { PropTypes } from "prop-types";
import { MovieList } from "./movies/MovieList";
import { MovieDetails } from "./movies/movieDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/movie/:id">
            <MovieDetails />
          </Route>
          <Route path="/">
            <MovieList />
          </Route>
          <Route path="/">
            <Input />
          </Route>
          <Route path="/">
            <Counter />
          </Route>
          <Route path="/">
            <Accordion />
          </Route>
          <Route path="/">
            <HelloWorld name="Petah" greeting="Yo" />
            <HelloWorld name="Jeannie" />
          </Route>
        </Switch>
      </Router>
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
