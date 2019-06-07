// @flow
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const TodoItem = ({
  title,
  computed,
  handelEditValue,
  handelComputed,
  handelRemoveTodoItem
}) => {
  // edit title
  const [isEdit, setEdit] = useState(false);
  const handelSaveValueFiled = event => event.keyCode === 13 && setEdit(false);

  return (
    <div className="todo-item">
      <div className="todo-item__row">
        <Checkbox
          value="checkedB"
          onChange={handelComputed}
          checked={computed}
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
            {title}
          </div>
        ) : (
          <div className="todo-filed__edit">
            <TextField
              id="standard-textarea"
              placeholder="Редактировать"
              margin="normal"
              multiline
              rowsMax="4"
              style={{ marginTop: 0 }}
              onChange={handelEditValue}
              onKeyDown={handelSaveValueFiled}
              value={title}
            />
          </div>
        )}
      </div>
      <IconButton aria-label="Delete" onClick={handelRemoveTodoItem}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  computed: PropTypes.bool.isRequired,
  handelEditValue: PropTypes.func.isRequired,
  handelComputed: PropTypes.func.isRequired,
  handelRemoveTodoItem: PropTypes.func.isRequired
};

export default TodoItem;
