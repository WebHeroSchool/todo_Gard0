import React from 'react';
import styles from '../Item/Item.module.css';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div
    className={styles.input}>
    <TextField
        id="standard-dense"
        label="Добавить дело"
        margin="dense"
    />
</div>);

export default InputItem;