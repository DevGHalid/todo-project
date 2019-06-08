import React from "react";

// components
import TodoItem from "./TodoItem";

export default ({ todoItems }) => {
  return (
    <div className="todo-content">
      <div className="todo-items">
        {todoItems.length > 0 ? (
          todoItems.map(item => <TodoItem key={item._id} {...item} />)
        ) : (
          <h1 style={{ textAlign: "center" }}>Пусто! (-_-)</h1>
        )}
      </div>
    </div>
  );
};
