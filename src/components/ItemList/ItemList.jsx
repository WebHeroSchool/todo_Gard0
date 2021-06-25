import React from "react";
import Item from "../Item/Item";
import List from "@material-ui/core/List";

const ItemList = ({ items, onClickDone, onClickDelete }) => (
  <List>
    {items.map((item) => (
      <a key={item.value}>
        <Item
          value={item.value}
          isDone={item.isDone}
          id={item.id}
          onClickDone={onClickDone}
          onClickDelete={onClickDelete}
        />
      </a>
    ))}
  </List>
);

export default ItemList;
