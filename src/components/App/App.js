import React from 'react';
import Title from '../Title/Title';
import List from '../List/List';
import Form from '../Form/Form';
import './App.scss';
import { useState } from 'react';
import LIST from '../../constants';

const App = () => {
  const [value, setValue] = useState('');

  const [list, setList] = useState(LIST);

  const handleChange = (value) => {
    setValue(value);
  };

  const addHandler = (event) => {
    event.preventDefault();
    setList((list) => {
      return [{ id: Math.random().toString(36).substring(7), text: value }, ...list];
    });
    setValue('');
  };

  const deleteHandler = (id) => {
    setList((list) => {
      return list.filter((listOfItems) => listOfItems.id !== id);
    });
  };

  return (
    <>
      <Title title="Список дел" />
      <Form onChange={handleChange} value={value} onClick={addHandler} />
      <List list={list} deleteHandler={deleteHandler} setList={setList} />
    </>
  );
};

export default App;
