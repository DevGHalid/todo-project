import React from 'react';

// components
import TodoItem from './TodoItem';

const TodoContent = ({ todoItems, searchValue, ...props }) => {
  if (searchValue) {
    todoItems = todoItems.filter(
      item =>
        String(item.title)
          .toLowerCase()
          .indexOf(searchValue) !== -1
    );
  }

  return (
    <div className="todo-content">
      <div className="todo-items">
        {todoItems.length > 0 ? (
          todoItems.map(item => <TodoItem key={item._id} {...item} />)
        ) : (
          <h1 style={{ textAlign: 'center' }}>Пусто</h1>
        )}
      </div>
    </div>
  );
};

export default TodoContent;
