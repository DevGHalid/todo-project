import React from "react";
import axios from "axios";

// components
import TodoAddItem from "./TodoAddItem";
import TodoTools from "./TodoTools";
import TodoContent from "./TodoContent";

// context
import { TodoContext } from "./context";

// css
import "./Todo.css";

class TodoList extends React.Component {
  state = {
    todoItems: [],
    isLoading: true,
    isCheckedAll: false
  };

  componentDidMount = async () => {
    const response = await axios.get("/api/todos");
    this.setState({ todoItems: response.data, isLoading: false });
  };

  // checked all checkbox
  handelCheckedAllItem = () => {
    const isCheckedAll = !this.state.isCheckedAll;
    this.state.todoItems.map(item => (item.computed = isCheckedAll));

    this.setState({ todoItems: this.state.todoItems, isCheckedAll });
  };

  // add todo item
  handelAddTodoItem = async value => {
    const { data } = await axios.post("/todo/add", {
      title: value,
      computed: false
    });
    this.setState({ todoItems: data });
  };

  handelEditComputed = index => computed => () => {
    this.updateDataTodo({ index, payload: { computed: !computed } });
  };

  updateDataTodo = async newData => {
    const { status, data } = await axios.post("/todo/update", newData);

    if (status === 200) {
      const { _id } = data;
      const newTodoItems = this.state.todoItems.map(item =>
        item._id === _id ? data : item
      );
      this.setState({ todoItems: newTodoItems });
    }
  };

  // remove todo item
  handelRemoveTodoItem = index => {};

  render() {
    return (
      <section className="todo-list">
        <TodoContext.Provider
          value={{ handelEditComputed: this.handelEditComputed }}
        >
          <TodoAddItem handelAddTodoItem={this.handelAddTodoItem} />
          <TodoTools handelCheckedAllItem={this.handelCheckedAllItem} />
          {this.state.isLoading ? (
            <p style={{ paddingLeft: 20 }}>Загрузка...</p>
          ) : (
            <TodoContent
              todoItems={this.state.todoItems}
              handelComputed={this.handelComputed}
              handelRemoveTodoItem={this.handelRemoveTodoItem}
            />
          )}
        </TodoContext.Provider>
      </section>
    );
  }
}

export default TodoList;
