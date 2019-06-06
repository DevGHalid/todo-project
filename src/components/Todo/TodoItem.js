// @flow
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

// type
type Props = {};

export default (props: Props) => {
  return (
    <div className="todo-item">
      <Checkbox
        value="checkedB"
        color="primary"
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
      />
      <div className="todo-title">Todo work!</div>
    </div>
  );
};
