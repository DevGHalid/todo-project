// @flow
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
import Main from "./components/Main/";
import { TodoList } from "./components/Todo/TodoList";

// css
import "./App.css";

type Props = {};

function App(props: Props) {
  return (
    <div className="App">
      <Router>
        <Main>
          <Switch>
            <Route path="/" component={TodoList} />
          </Switch>
        </Main>
      </Router>
    </div>
  );
}

export default App;
