// @flow
import React, { useState, useEffect } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { ThemeProvider } from '@material-ui/styles';

// type
interface Props {
  title: string;
  computed: boolean;
  handelEditValue: Function;
  handelComputed: Function;
}

export default ({
  title,
  computed,
  handelEditValue,
  handelComputed
}: Props) => {
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
              style={{ marginTop: 0 }}
              onChange={handelEditValue}
              onKeyDown={handelSaveValueFiled}
              value={title}
            />
          </div>
        )}
      </div>
    </div>
  );
};
