import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Checkbox from "@material-ui/core/Checkbox";
import { Delete } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import styles from './Item.module.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';

class Item extends React.Component {


  componentDidMount() {
    this.timerId = setInterval(() => console.log('leak test'), 1000);
  };

  componentWillUnmount() {
    clearInterval(this.timerId);
  };


  render() {

    const { id, isDone, value, onClickDone, onClickDelete, index } = this.props;
    return (
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
            onClick={() => onClickDelete(index)}
          >
            <Delete />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    );
  };
};

Item.defaultProps = {
  value: 'у тебя нет дел',
  isDone: false
};
Item.propTypes = {

  value: PropTypes.string,
  isDone: PropTypes.bool
};

Item.propTypes = {

  id: PropTypes.number.isRequired,
  isDone: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onClickDone: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,

};


export default Item;
