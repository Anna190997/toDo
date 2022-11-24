import React from 'react';
import './ListItems.scss';
import Button from '../Button/Button';

const ListItems = ({ item: { id, text }, updatedItem, setUpdateItem, setList, deleteHandler }) => {
  const isCurrentBeingUpdated = updatedItem === id;

  const handleInputChange = ({ target: { value } }) => {
    setList((prevList) =>
      prevList.map((item) => (item.id === id ? { ...item, text: value } : item)),
    );
  };

  const renderTitleOrInput = () => {
    return isCurrentBeingUpdated ? <input value={text} onChange={handleInputChange} /> : text;
  };
  return (
    <div className="items_wrapper">
      <p className="items_text">{renderTitleOrInput()} </p>
      <div className="button_wrapper">
        <button className="button" onClick={() => setUpdateItem(isCurrentBeingUpdated ? null : id)}>
          {isCurrentBeingUpdated ? 'Сохранить' : 'Редактировать'}
        </button>
        <Button textButton="Удалить задачу" onClick={() => deleteHandler(id)} />
      </div>
    </div>
  );
};

export default ListItems;
