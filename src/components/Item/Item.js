import React from 'react';
import ListItem from '@material-ui/core/ListItem'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import Checkbox from '@material-ui/core/Checkbox';
import DeleteIcon from '@material-ui/core/DeleteIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/ListItemSecondaryAction';
import { withStyles } from '@material-ui/core';


const Item = ({ value, isDone, classes, onClickDone }) => (
    <ListItem fullWidth>
        <Checkbox
            checked={isDone}
            tabIndex={-1}
            onClick={() => onClickDone(isDone)}
        />
        <ListItemText primary={value}
            classes={{ root: isDone && classes.isDone }}
        />
        <ListItemSecondaryAction>
            <IconButton aria-label="New comment">
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>);

export default withStyles (Item);