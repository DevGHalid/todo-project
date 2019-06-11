import React from 'react';
import TextField from '@material-ui/core/TextField';

export default ({ onSearchTodo, searchValue }) => {
  return (
    <div className="task-field__add">
      <TextField
        id="outlined-full-width"
        label="Поиск"
        style={{ margin: 8 }}
        placeholder="Поиск"
        fullWidth
        margin="normal"
        onChange={onSearchTodo}
        variant="outlined"
        value={searchValue}
        InputLabelProps={{
          shrink: true
        }}
      />
    </div>
  );
};
