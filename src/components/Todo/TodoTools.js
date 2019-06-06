// @flow
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// interface props
interface Props {
  handelCheckedAllItem: Function;
}

export default ({ handelCheckedAllItem }: Props) => {
  return (
    <div className="todo-header">
      <div className="todo-header__tools">
        <FormControlLabel
          control={<Checkbox onChange={handelCheckedAllItem} color="primary" />}
          label="Выбрать все"
        />
      </div>
    </div>
  );
};
