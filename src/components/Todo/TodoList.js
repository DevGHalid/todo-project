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
    tasks: [],
    searchValue: '',
    isLoading: true
  };

  componentDidMount = async () => {
    const response = await axios.get('/api/todos');
    this.setState({ tasks: response.data, isLoading: false });
  };

  // search todo
  searchTask = ({ target: { value } }) => {
    value = value.toLowerCase().trim();
    this.setState({ searchValue: value });
  };

  // add todo item
  addTask = async value => {
    const { data } = await axios.post('/todo/add', {
      title: value,
      computed: false
    });

    const newtasks = this.state.tasks.concat(data);
    this.setState({ tasks: newtasks });
  };

  // update computed to db
  updateComputed = id => computed => {
    this.updateDataTask({ id, payload: { computed: !computed } });
  };

  // update title to db
  updateValue = id => value => {
    this.updateDataTask({ id, payload: { title: value } });
  };

  // update data task to db
  updateDataTask = async newData => {
    const { status, data } = await axios.put('/todo/update', newData);

    if (status === 200) {
      const { _id } = data;
      const newtasks = this.state.tasks.map(item =>
        item._id === _id ? data : item
      );

      this.setState({ tasks: newtasks });
    }
  };

  // remove todo item
  deleteTask = async id => {
    const _id = encodeURI(id);
    const { data } = await axios.delete(`todo/${_id}/del`);
    if (data.ok) {
      const newtasks = this.state.tasks.filter(item => item._id !== id);
      this.setState({ tasks: newtasks });
    }
  };

  render() {
    return (
      <section className="task-list">
        <TodoContext.Provider
          value={{
            updateComputed: this.updateComputed,
            updateValue: this.updateValue,
            deleteTask: this.deleteTask
          }}
        >
          <TodoAdd addTask={this.addTask} />
          <TodoSearch
            onSearchTodo={this.searchTask}
            searchValue={this.state.searchValue}
          />
          {this.state.isLoading ? (
            <p style={{ paddingLeft: 20 }}>Загрузка...</p>
          ) : (
            <TodoContent
              tasks={this.state.tasks}
              searchValue={this.state.searchValue}
            />
          )}
        </TodoContext.Provider>
      </section>
    );
  }
}
