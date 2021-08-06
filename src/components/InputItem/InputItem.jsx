import React from 'react';
import styles from '../Item/Item.module.css';
import TextField from '@material-ui/core/TextField';
import ListItem from "@material-ui/core/ListItem";
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

class InputItem extends React.Component {
    state = {
        inputValue: ''
    };
    onClickRefresh = () => {
        this.setState({
            inputValue: ''
        });

        this.props.onClickAdd(this.state.inputValue);
    }
    render() {
        const { onClickAdd } = this.props;

        return (
            <Grid>
                <TextField
                    id="standard-full-width"
                    label="Добавить дело"
                    margin="dense"
                    className={styles.input}
                    value={this.state.inputValue}
                    onChange={event => this.setState({ inputValue: event.target.value })}


                />
                <ListItem>
                    <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                        className={styles.input_button}
                        onClick={this.onClickRefresh}>
                        Добавить
                    </Button>
                </ListItem>
            </Grid>);
    }
};

InputItem.propTypes = {

    onClickAdd: PropTypes.func.isRequired,

};
export default InputItem;