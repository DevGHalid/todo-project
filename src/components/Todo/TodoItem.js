// @flow
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

// context
import { TodoContext } from './TodoList';

const TodoItem = ({ _id, title, computed, ...props }) => {
  // state
  const [isEdit, setEdit] = useState(false);
  const [value, setValue] = useState(title);

  // context
  const { updateComputed, updateValue, deleteTodoItem } = useContext(
    TodoContext
  );

  // change title
  const changeTitle = ({ keyCode }) => {
    if (keyCode === 13) {
      setEdit(false);
      updateValue(_id)(value);
    }
  };

  // change computed
  const changeComputed = () => updateComputed(_id)(computed);

  return (
    <div className="todo-item">
      <div className="todo-item__row">
        <Checkbox
          value="checkedB"
          checked={computed}
          onChange={changeComputed}
          color="primary"
          inputProps={{
            'aria-label': 'secondary checkbox'
          }}
        />
        {!isEdit ? (
          <div
            className={`todo-title ${computed ? 'todo-text__through' : ''}`}
            onClick={() => setEdit(true)}
          >
            {value}
          </div>
        ) : (
          <div className="todo-filed__edit">
            <TextField
              id="standard-textarea"
              placeholder="Редактировать"
              margin="normal"
              multiline
              rowsMax="4"
              onChange={({ target: { value } }) => setValue(value)}
              onKeyDown={changeTitle}
              style={{ marginTop: 0 }}
              value={value}
            />
          </div>
        )}
      </div>
      <div className="delete-btn">
        <IconButton
          aria-label="Delete"
          onClick={() => deleteTodoItem(String(_id))}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  _id: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  computed: PropTypes.bool.isRequired
};

export default TodoItem;
