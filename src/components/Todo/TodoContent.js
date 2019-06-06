// @flow
import React from 'react';

// components
import TodoItem from './TodoItem';

// type
type Props = {};

export default (props: Props) => (
  <div className="todo-content">
    <div className="todo-items">
      <TodoItem />
    </div>
  </div>
);
