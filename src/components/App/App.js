import React from 'react';
import styles from '../App/App.module.css';
import InputItem from '../InputItem/InputItem.jsx';
import ItemList from '../ItemList/ItemList.jsx';
import Footer from '../Footer/Footer.jsx';



const App = () => {

  const toDo = [
    {
      value: 'Написать приложение',
      isDone: true
    },
    {
      value: 'прописать props',
      isDone: false
    },
    {
      value: 'сделать все дела',
      isDone: false
    }
  ]

  let toDoFilter = toDo.filter(toDo => toDo.isDone === false);
  let toDoList = toDoFilter.length;



  return (

    <div className={styles.wrap}>
      <h2 className={styles.title}>Важные дела</h2>
      <InputItem />
      <div>
        <ItemList item={toDo} />
        <Footer count={toDoList} />
      </div>
    </div >
  );
};

export default App;
