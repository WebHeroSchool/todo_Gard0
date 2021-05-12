import React from 'react';
import Item from '../Item/Item.js';
import styles from '../Item/Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';


const ItemList = ({ item }) => (
  <ul className={styles.list}>
    {item.map(item => (
      <li className={styles.listItem}>
        <Checkbox
          value="checkedA"
          inputProps={{
            'aria-label': 'primary checkbox'
          }}
        />
        <Item
          taskText={item.value}
          taskDone={item.isDone}
        />
        <Checkbox
          value="checkedC"
          indeterminate
          inputProps={{
            'aria-label': 'indeterminate checkbox'
          }}
        />
      </li>
    ))}
  </ul>)

export default ItemList;