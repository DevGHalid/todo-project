import React from "react";

// components
import TodoItem from "./TodoItem";

export default ({
  todoItems,
  handelEditValue,
  handelComputed,
  handelRemoveTodoItem
}) => {
  return (
    <div className="todo-content">
      <div className="todo-items">
        {todoItems.length > 0 ? (
          todoItems.map(item => (
            <TodoItem
              key={item._id}
              title={item.title}
              computed={item.computed}
              handelEditValue={handelEditValue(item._id)}
              handelComputed={handelComputed(item._id)}
              handelRemoveTodoItem={handelRemoveTodoItem(item._id)}
            />
          ))
        ) : (
          <h1 style={{ textAlign: "center" }}>Пусто! (-_-)</h1>
        )}
      </div>
    </div>
  );
};
