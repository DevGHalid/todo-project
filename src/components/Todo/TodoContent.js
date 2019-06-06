// @flow
import React from 'react';

// components
import TodoItem from './TodoItem';

// interface
interface Props {
  todoItems: Array<{ id: number, title: string, computed: boolean }>;
  handelEditValue: Function;
  handelComputed: Function;
}

export default ({ todoItems, handelEditValue, handelComputed }: Props) => {
  return (
    <div className="todo-content">
      <div className="todo-items">
        {todoItems.map(item => (
          <TodoItem
            key={item.id}
            title={item.title}
            computed={item.computed}
            handelEditValue={handelEditValue(item.id)}
            handelComputed={handelComputed(item.id)}
          />
        ))}
      </div>
    </div>
  );
};
