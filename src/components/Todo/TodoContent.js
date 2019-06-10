import React, { useState } from "react";

// components
import TodoItem from "./TodoItem";
import TodoTools from "./TodoTools";

export default ({ todoItems, searchValue }) => {
  if (searchValue) {
    todoItems = todoItems.filter(
      item =>
        String(item.title)
          .toLowerCase()
          .indexOf(searchValue) !== -1
    );
  }

  const [_todoItems, setTodoItems] = useState(todoItems);
  const [checkedAll, setCheckedAll] = useState(true);
  const [chooseCheckedAll, setChooseCheckedAll] = useState(true);

  // checked all checkbox
  const checkedAllComputed = () => {
    setCheckedAll(!checkedAll);
    setTodoItems(todoItems.map(item => (item.computed = checkedAll)));
  };
  console.log(1);

  // choose checked comouted
  const chooseAllCheckedComputed = () => {
    setChooseCheckedAll(!chooseCheckedAll);
    todoItems = todoItems.filter(item => item.computed === true);
    console.log(todoItems);
  };

  return (
    <div className="todo-content">
      <TodoTools
        onCheckedAllComputed={checkedAllComputed}
        onChooseAllCheckedComputed={chooseAllCheckedComputed}
      />
      <div className="todo-items">
        {todoItems.length > 0 ? (
          todoItems.map(item => <TodoItem key={item._id} {...item} />)
        ) : (
          <h1 style={{ textAlign: "center" }}>Пусто</h1>
        )}
      </div>
    </div>
  );
};
