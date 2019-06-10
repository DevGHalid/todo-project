import React, { createContext, Component } from 'react';
import axios from 'axios';

// components
import TodoAdd from './TodoAdd';
import TodoSearch from './TodoSearch';
import TodoContent from './TodoContent';

// css
import './Todo.css';

// context
export const TodoContext = createContext({});

export class TodoList extends Component {
  state = {
    todoItems: [],
    searchValue: '',
    isLoading: true
  };

  componentDidMount = async () => {
    const response = await axios.get('/api/todos');
    this.setState({ todoItems: response.data, isLoading: false });
  };

  // search todo
  searchTodo = ({ target: { value } }) => {
    value = value.toLowerCase().trim();
    this.setState({ searchValue: value });
  };

  // add todo item
  addTodoItem = async value => {
    const { data } = await axios.post('/todo/add', {
      title: value,
      computed: false
    });

    const newTodoItems = this.state.todoItems.concat(data);
    this.setState({ todoItems: newTodoItems });
  };

  // update computed to db
  updateComputed = id => computed => {
    this.updateDataTodo({ id, payload: { computed: !computed } });
  };

  // update title to db
  updateValue = id => value => {
    this.updateDataTodo({ id, payload: { title: value } });
  };

  // update data todo to db
  updateDataTodo = async newData => {
    const { status, data } = await axios.put('/todo/update', newData);

    if (status === 200) {
      const { _id } = data;
      const newTodoItems = this.state.todoItems.map(item =>
        item._id === _id ? data : item
      );

      this.setState({ todoItems: newTodoItems });
    }
  };

  // remove todo item
  deleteTodoItem = async id => {
    const _id = encodeURI(id);
    const { data } = await axios.delete(`todo/${_id}/del`);
    if (data.ok) {
      const newTodoItems = this.state.todoItems.filter(item => item._id !== id);
      this.setState({ todoItems: newTodoItems });
    }
  };

  render() {
    return (
      <section className="todo-list">
        <TodoContext.Provider
          value={{
            updateComputed: this.updateComputed,
            updateValue: this.updateValue,
            deleteTodoItem: this.deleteTodoItem
          }}
        >
          <TodoAdd addTodoItem={this.addTodoItem} />
          <TodoSearch
            onSearchTodo={this.searchTodo}
            searchValue={this.state.searchValue}
          />
          {this.state.isLoading ? (
            <p style={{ paddingLeft: 20 }}>Загрузка...</p>
          ) : (
            <TodoContent
              todoItems={this.state.todoItems}
              searchValue={this.state.searchValue}
            />
          )}
        </TodoContext.Provider>
      </section>
    );
  }
}
