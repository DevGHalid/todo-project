// @flow
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

// type props
type Props = {};

export default (props: Props) => (
  <div className="todo-header">
    <Checkbox
      value="checkedB"
      color="primary"
      inputProps={{
        'aria-label': 'secondary checkbox'
      }}
    />
    <div class="todo-header__checked_all">Выбрать все</div>
  </div>
);
