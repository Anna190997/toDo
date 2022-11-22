import React from 'react';
import Title from '../Title/Title';
import List from '../List/List';
import Form from '../Form/Form';
import './App.scss';
import { useState } from 'react';

const App = () => {
  const [value, setValue] = useState('');

  const [listOfItems, setListOfItems] = useState([
    { id: 1, text: 'Сходить в магазин' },
    { id: 2, text: 'Прочитать книгу' },
    { id: 3, text: 'Сделать уроки' },
  ]);

  const handleChange = (value) => {
    setValue(value);
  };

  const addHandler = (event) => {
    event.preventDefault();
    setListOfItems((list) => {
      return [{ id: Math.random().toString(36).substring(7), text: value }, ...list];
    });
    setValue('');
  };
  
  const deleteHandler = (id) => {
    setListOfItems((list) => {
      return list.filter((listOfItems) => listOfItems.id !== id);
    });
  };

  return (
    <>
      <Title title="Список дел" />
      <Form onChange={handleChange} value={value} onClick={addHandler} />
      <List listOfItems={listOfItems} deleteHandler={deleteHandler} />
    </>
  );
};

export default App;
