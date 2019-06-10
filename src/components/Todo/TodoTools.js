// @flow
import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default ({ onCheckedAllComputed, onChooseAllCheckedComputed }) => {
  return (
    <div className="todo-header">
      <div className="todo-header__tools">
        <FormControlLabel
          control={<Checkbox onChange={onCheckedAllComputed} color="primary" />}
          label="Выбрать все"
        />
        <FormControlLabel
          control={
            <Checkbox onChange={onChooseAllCheckedComputed} color="primary" />
          }
          label="Выбрать которые отмечены"
        />
      </div>
    </div>
  );
};
