import React from 'react';
import './Form.scss';
import Button from '../Button/Button';

const Form = ({ onChange, onClick, value }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return (
    <form className="form_wrapper">
      <input
        className="input_add_task"
        onChange={handleChange}
        value={value}
        placeholder="Впишите задачу..."
      />
      <Button textButton="Добавить задачу" onClick={onClick} />
    </form>
  );
};

export default Form;
