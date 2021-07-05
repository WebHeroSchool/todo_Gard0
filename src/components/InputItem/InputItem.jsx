import React from 'react';
import styles from '../Item/Item.module.css';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AlarmIcon from '@material-ui/icons/Alarm';
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const InputItem = () => (
    <Grid>
        <TextField
            id="standard-full-width"
            label="Добавить дело"
            margin="normal"
            className={styles.input}

        />
        <ListItem
            >
            <Button
                variant="contained"
                size="medium"
                color="primary"
                className={styles.input_button}>
                Добавить
            </Button>
            {/* <ListItemSecondaryAction>
                <IconButton
                    color="secondary"
                    aria-label="add an alarm">
                    <AlarmIcon />
                </IconButton>
            </ListItemSecondaryAction> */}
        </ListItem>
    </Grid>);

export default InputItem;