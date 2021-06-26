import React from 'react';
import styles from '../Item/Item.module.css';
import TextField from '@material-ui/core/TextField';

const InputItem = () => (<div
className={styles.input}
>
    <TextField
        id="standard-full-width"
        label="Добавить дело"
        margin="normal"
        style={{ margin: 8 }}
        fullWidth

    />
</div>);

export default InputItem;