import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import { Delete } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";


const Item = ({ value, isDone, onClickDone }) => (
  <ListItem>
    <Checkbox onClick={() => onClickDone(isDone)} />
    <p>{value}</p>
    <ListItemSecondaryAction>
      <IconButton aria-label="New comment">
        <Delete />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default Item
