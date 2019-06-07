import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';

export default ({ handelAddTodoItem }) => {
  const [value, setValue] = useState('');

  return (
    <div className="todo-field__add">
      <TextField
        id="outlined-full-width"
        label="Добавить"
        style={{ margin: 8 }}
        placeholder="Добавить"
        fullWidth
        margin="normal"
        variant="outlined"
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
        onKeyDown={({ keyCode }) => {
          if (value.trim() && keyCode === 13) {
            // add todo item
            handelAddTodoItem(value);
            // clear field
            setValue('');
          }
        }}
        InputLabelProps={{
          shrink: true
        }}
      />
    </div>
  );
};
