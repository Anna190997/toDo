import React from 'react';
import ListItems from '../ListItems/ListItems';

const List = ({ listOfItems, deleteHandler }) => {
  return (
    <div>
      {listOfItems.map((item) => (
        <ListItems itemsText={item.text} key={item.id} deleteHandler={deleteHandler} id={item.id} />
      ))}
    </div>
  );
};

export default List;
