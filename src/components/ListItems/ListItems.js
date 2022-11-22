import React from 'react';
import './ListItems.scss';
import Button from '../Button/Button';

const ListItems = ({ itemsText, deleteHandler, id }) => {
  return (
    <div className="items_wrapper">
      <p className="items_text">{itemsText} </p>
      <Button textButton="Удалить задачу" onClick={() => deleteHandler(id)} />
    </div>
  );
};

export default ListItems;
