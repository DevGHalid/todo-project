// @flow
import React from 'react';

// components
import TodoHeader from './TodoHeader';
import TodoContent from './TodoContent';

// css
import './Todo.css';

// type
type Props = {};

export default (props: Props) => (
  <section className="todo-section">
    <TodoHeader />
    <TodoContent />
  </section>
);
