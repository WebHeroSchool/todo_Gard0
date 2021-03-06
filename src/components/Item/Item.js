import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import { Delete } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import styles from './Item.module.css';
import classnames from 'classnames';


const Item = ({ id, isDone, value, onClickDone, onClickDelete }) => (
  <ListItem>
    <Checkbox
      onClick={() => onClickDone(id)}
    />
    <p
      className={classnames({
        [styles.inProgress]: false,
        [styles.done]: isDone
      })}
    >
      {value}
    </p>

    <ListItemSecondaryAction>
      <IconButton
        aria-label="delete"
        onClick={() => onClickDelete(id)}
      >
        <Delete />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
);

export default Item;
