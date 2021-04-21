import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';

const App = () => {
  const items = [
    {
      value: 'Написать приложение'
    },
    {
      value: 'прописать props'
    },
    {
      value: 'сделать все дела'
    }
  ];

  return (
    <div className='wrap'>
      <h1>Важные дела</h1>
      <ItemList items={items} />
      <Footer count={6} />
    </div>
  );
};

export default App;
