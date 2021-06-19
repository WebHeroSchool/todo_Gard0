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
        isDone: false
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

  onClickDone = id => {
    const newItemsList = this.state.toDo.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone;
      }
      return newItem;
    });
    this.setState({ toDo: newItemsList });
  };

  render() {

    return (

      <div className={styles.wrap}>
        <h2 className={styles.title}>Важные дела</h2>
        <InputItem />
        <div>
          <ItemList items={this.state.toDo} onClickDone={this.onClickDone} />
          <Footer count={this.state.toDo.filter(toDo => !toDo.isDone).length} />
        </div>
      </div >
    );
  };
};

export default App;
