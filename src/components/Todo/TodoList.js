// @flow
import * as React from 'react';

// components
import TodoHeader from './TodoHeader';
import TodoContent from './TodoContent';

// css
import './Todo.css';

// type type
interface Props {}

// interface state
interface State {
  todoItems: Array<{ id: number, title: string, computed: boolean }>;
}

class TodoList extends React.Component<Props, State> {
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
    ]
  };

  handelEditTitle = (index: number) => ({ target: { value } }) => {
    const { todoItems } = this.state;
    const newTodoItems = todoItems.map(item =>
      item.id === index ? { ...item, title: value } : item
    );

    this.setState({
      todoItems: newTodoItems
    });
  };

  handelComputed = (index: number) => () => {
    const { todoItems } = this.state;
    const newTodoItems = todoItems.map(item =>
      item.id === index ? { ...item, computed: !item.computed } : item
    );

    this.setState({ todoItems: newTodoItems });
  };

  render() {
    return (
      <section className="todo-section">
        <TodoHeader />
        <TodoContent
          todoItems={this.state.todoItems}
          handelEditValue={this.handelEditTitle}
          handelComputed={this.handelComputed}
        />
      </section>
    );
  }
}

export default TodoList;
