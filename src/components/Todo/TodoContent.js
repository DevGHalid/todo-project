import React from 'react';

// components
import TodoItem from './TodoItem';

export default ({
  todoItems,
  handelEditValue,
  handelComputed,
  handelRemoveTodoItem
}: Props) => {
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
            handelRemoveTodoItem={handelRemoveTodoItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
};
