import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

export default ({ handelAddTodoItem }) => {
  const [value, setValue] = useState('');

  return (
    <div className="todo-field__add">
      <FormControl fullWidth>
        <InputLabel htmlFor="adornment-amount">Добавить</InputLabel>
        <Input
          id="adornment-amount"
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
        />
      </FormControl>
      <Button
        variant="contained"
        style={{ fontWeight: 'bold', marginLeft: 10 }}
        color="primary"
        onClick={() => {
          if (value.trim()) {
            // add todo item
            handelAddTodoItem(value);
            // clear field
            setValue('');
          }
        }}
      >
        Добавить
      </Button>
    </div>
  );
};
