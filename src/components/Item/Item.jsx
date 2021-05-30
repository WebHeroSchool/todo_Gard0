import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';


const Item = ({ taskText, taskDone }) => {
    return (<span
        className={
            classnames({
                [styles.inProgress]: true,
                [styles.done]: taskDone,
            })}
    >
        {taskText};
    </span>);
}

export default Item;