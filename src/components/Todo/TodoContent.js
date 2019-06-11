import React from 'react';

// components
import TodoItem from './TodoItem';

const TodoContent = ({ tasks, searchValue, ...props }) => {
  if (searchValue) {
    tasks = tasks.filter(
      item =>
        String(item.title)
          .toLowerCase()
          .indexOf(searchValue) !== -1
    );
  }

  return (
    <div className="task-content">
      <div className="task-items">
        {tasks.length > 0 ? (
          tasks.map(item => <TodoItem key={item._id} {...item} />)
        ) : (
          <h1 style={{ textAlign: 'center' }}>Пусто</h1>
        )}
      </div>
    </div>
  );
};

export default TodoContent;
