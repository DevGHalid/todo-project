import React from "react";
import axios from "axios";

// components
import TodoAddItem from "./TodoAddItem";
import TodoTools from "./TodoTools";
import TodoContent from "./TodoContent";

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

  // add todo item
  handelAddTodoItem = async value => {
    const index = this.state.todoItems.length + 1;
    const newItemTodo = {
      title: value,
      computed: false
    };

    const response = await axios.post("/todo/add", newItemTodo);
    this.setState({ todoItems: response.data });
  };

  // checked all checkbox
  handelCheckedAllItem = () => {
    const isCheckedAll = !this.state.isCheckedAll;
    this.state.todoItems.map(item => (item.computed = isCheckedAll));

    this.setState({ todoItems: this.state.todoItems, isCheckedAll });
  };

  // edit title
  handelEditTitle = index => ({ target: { value } }) => {
    const newTodoItems = this.state.todoItems.map(item =>
      item._id === index ? { ...item, title: value } : item
    );

    this.setState({
      todoItems: newTodoItems
    });
  };

  // edit computed
  handelComputed = index => () => {
    const newTodoItems = this.state.todoItems.map(item =>
      item._id === index ? { ...item, computed: !item.computed } : item
    );

    this.setState({ todoItems: newTodoItems });
  };

  // remove todo item
  handelRemoveTodoItem = index => () => {
    const newTodoItems = this.state.todoItems.filter(
      item => item._id !== index
    );
    this.setState({ todoItems: newTodoItems });
  };

  render() {
    return (
      <section className="todo-list">
        <TodoAddItem handelAddTodoItem={this.handelAddTodoItem} />
        <TodoTools handelCheckedAllItem={this.handelCheckedAllItem} />
        {this.state.isLoading ? (
          <p style={{ paddingLeft: 20 }}>Загрузка...</p>
        ) : (
          <TodoContent
            todoItems={this.state.todoItems}
            handelEditValue={this.handelEditTitle}
            handelComputed={this.handelComputed}
            handelRemoveTodoItem={this.handelRemoveTodoItem}
          />
        )}
      </section>
    );
  }
}

export default TodoList;
