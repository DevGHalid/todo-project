// @flow
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';

// components
import Main from './components/Main/';
import { TodoList } from './components/Todo/TodoList';

// css
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Router>
        <Main>
          <Switch>
            <Route path="/todos" component={TodoList} />
            <Route
              path="*"
              render={props => (
                <NavLink to="/todos" className="todo-link">
                  Todos
                </NavLink>
              )}
            />
          </Switch>
        </Main>
      </Router>
    </div>
  );
}

export default App;
