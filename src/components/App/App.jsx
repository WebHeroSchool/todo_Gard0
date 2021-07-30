import React from 'react';
import styles from '../App/App.module.css';
import InputItem from '../InputItem/InputItem.jsx';
import ItemList from '../ItemList/ItemList.jsx';
import Footer from '../Footer/Footer.jsx';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

class App extends React.Component {

  state = {
    toDo: [
      {
        id: 1,
        value: 'Дело 1',
        isDone: false
      },
      {
        id: 2,
        value: 'Дело 2',
        isDone: false
      },
      {
        id: 3,
        value: 'Дело 3',
        isDone: false
      }
    ],
    count: 3
  }

  onClickDone = (id) => {
    const newItemsList = this.state.toDo.map(item => {
      const newItem = { ...item };
      if (item.id === id) {
        newItem.isDone = !item.isDone
      }
      return newItem
    });
    this.setState({ toDo: newItemsList });
  };

  onClickDelete = (id) => {
    const itemListDelete = this.state.toDo.filter((item, idDelete) => idDelete !== id);
    this.setState({ toDo: itemListDelete });
  };

  onClickAdd = (value) => {
    if (value !== '') {

      this.setState(state => ({
        toDo: [
          ...state.toDo,
          {
            value,
            isDone: false,
          }
        ]
      }));
    } else {
      this.setState({ error: 'пустое поле' })
      setTimeout(() => { this.setState({ error: '' }) }, 2500)
    };

  };
  render() {

    return (

      <div className={styles.wrap}>
        {this.state.error && <Alert severity="warning">{this.state.error}</Alert>}
        <h2 className={styles.title}>Список задач</h2>
        <InputItem
          onClickAdd={this.onClickAdd} // props свойства
        />
        <div>
          <ItemList
            items={this.state.toDo}
            onClickDone={this.onClickDone}
            onClickDelete={this.onClickDelete}
          />
          <Footer count={this.state.toDo.filter(toDo => !toDo.isDone).length} />
        </div>
      </div >
    );
  };
};


export default App;
