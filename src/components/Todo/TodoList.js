import React from 'react';
import axios from 'axios';

// components
import TodoAddItem from './TodoAddItem';
import TodoTools from './TodoTools';
import TodoContent from './TodoContent';

// css
import './Todo.css';

class TodoList extends React.Component {
  state = {
    todoItems: [
      {
        id: 1,
        title: 'todo name render',
        computed: false
      },
      {
        id: 2,
        title: 'this is valueof',
        computed: false
      },
      {
        id: 3,
        title: 'main renderingr',
        computed: true
      }
    ],
    isCheckedAll: false
  };

  // add todo item
  handelAddTodoItem = value => {
    const index = this.state.todoItems.length + 1;
    const newItemTodo = {
      title: value,
      computed: false
    };

    axios.post('/todo/add', newItemTodo);

    process.nextTick(() => {
      newItemTodo.id = index;

      this.setState({
        todoItems: [...this.state.todoItems, newItemTodo]
      });
    });
  };

  // checked all checkbox
  handelCheckedAllItem = () => {
    const isCheckedAll = !this.state.isCheckedAll;
    this.state.todoItems.map(item => (item.computed = isCheckedAll));

    this.setState({ todoItems: this.state.todoItems, isCheckedAll });
  };

  // edit title
  handelEditTitle = (index: number) => ({ target: { value } }) => {
    const newTodoItems = this.state.todoItems.map(item =>
      item.id === index ? { ...item, title: value } : item
    );

    this.setState({
      todoItems: newTodoItems
    });
  };

  // edit computed
  handelComputed = (index: number) => () => {
    const newTodoItems = this.state.todoItems.map(item =>
      item.id === index ? { ...item, computed: !item.computed } : item
    );

    this.setState({ todoItems: newTodoItems });
  };

  // remove todo item
  handelRemoveTodoItem = (index: number) => () => {
    const newTodoItems = this.state.todoItems.filter(item => item.id !== index);
    this.setState({ todoItems: newTodoItems });
  };

  render() {
    return (
      <section className="todo-section">
        <TodoAddItem handelAddTodoItem={this.handelAddTodoItem} />
        <TodoTools handelCheckedAllItem={this.handelCheckedAllItem} />
        <TodoContent
          todoItems={this.state.todoItems}
          handelEditValue={this.handelEditTitle}
          handelComputed={this.handelComputed}
          handelRemoveTodoItem={this.handelRemoveTodoItem}
        />
      </section>
    );
  }
}

export default TodoList;
