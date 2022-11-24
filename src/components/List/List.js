import React, { useState } from 'react';
import ListItems from '../ListItems/ListItems';

const List = ({ list, deleteHandler, setList }) => {
  const [updateItem, setUpdateItem] = useState(null);
  return (
    <div>
      {list.map((item) => (
        <ListItems
          item={item}
          key={item.id}
          setList={setList}
          updatedItem={updateItem}
          setUpdateItem={setUpdateItem}
          deleteHandler={deleteHandler}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default List;
