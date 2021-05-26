import React from 'react';
import Item from '../Item/Item.jsx';
import styles from '../Item/Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import IconButton from '@material-ui/core/IconButton';
// import Delete from '@material-ui/icons/Delete';


const ItemList = ({ item }) => (

  <ul className={styles.list}>
    {item.map(item => (
      <li key={item.id} className={styles.listItem}>
        <Checkbox
          value="checked"
          inputProps={{
            'aria-label': 'primary checkbox'
          }}
        />
        <Item
          taskText={item.value}
          taskDone={item.isDone}
        />
        <Checkbox
          defaultChecked
          indeterminate
          inputProps={{ 'aria-label': 'indeterminate checkbox' }}
        />
        {/* <IconButton
          classes={styles.delete}
          color={'secondary'}>
          <Delete />
        </IconButton> */}
      </li>
    ))}
  </ul>)

export default ItemList;