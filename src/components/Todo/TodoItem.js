// @flow
import React, { useState } from "react";
import PropTypes from "prop-types";

import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

// context
import { TodoContext } from "./context";

const TodoItem = ({ _id, title, computed }) => {
  // edit title
  const [isEdit, setEdit] = useState(false);

  return (
    <TodoContext.Consumer>
      {ctx => (
        <div className="todo-item">
          <div className="todo-item__row">
            <Checkbox
              value="checkedB"
              checked={computed}
              onChange={ctx.handelEditComputed(_id)(computed)}
              color="primary"
              inputProps={{
                "aria-label": "secondary checkbox"
              }}
            />
            {!isEdit ? (
              <div
                className={`todo-title ${computed ? "todo-text__through" : ""}`}
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
                  value={title}
                />
              </div>
            )}
          </div>
          <IconButton aria-label="Delete">
            <DeleteIcon fontSize="small" />
          </IconButton>
        </div>
      )}
    </TodoContext.Consumer>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  computed: PropTypes.bool.isRequired
};

export default TodoItem;
