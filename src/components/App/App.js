import React from 'react';
import styles from '../App/App.module.css';
import InputItem from '../InputItem/InputItem.jsx';
import ItemList from '../ItemList/ItemList.jsx';
import Footer from '../Footer/Footer.jsx';


class App extends React.Component {

  state = {
    toDo: [
      {
        id: 1,
        value: 'Написать приложение',
        isDone: true
      },
      {
        id: 2,
        value: 'прописать props',
        isDone: false
      },
      {
        id: 3,
        value: 'сделать все дела',
        isDone: false
      }
    ]
  }

  onClickDone = isDone => console.log(isDone);


  render() {
    let toDoFilter = this.state.toDo.filter(toDo => toDo.isDone === false);

    return (
      
      <div className={styles.wrap}>
        <h2 className={styles.title}>Важные дела</h2>
        <InputItem />
        <div>
          <ItemList item={this.state.toDo} onClickDone={this.onClickDone} />
          <Footer count={toDoFilter.length} />
        </div>
      </div >
    );
  };
};

export default App;
