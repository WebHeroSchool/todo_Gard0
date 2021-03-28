import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';

const todoItem = 'Написать lkjbjh';

const App = () => (
  <div>
    <h1>Важные дела</h1>
    <ItemList todoItem={todoItem} />
    <Footer count={3} />
  </div>
);

export default App;
