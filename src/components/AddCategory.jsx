import PropTypes from 'prop-types';
import { useState } from 'react';

export const AddCategory = ({ onAddCategories }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      onAddCategories(inputValue);
      setInputValue('');
    }
  };

  return (
    <form style={{ display: 'flex', gap: 16 }} onSubmit={handleSubmit} aria-label='form'>
      <input placeholder='Buscar gifs' value={inputValue} onChange={handleInputChange} />
      <button type='submit'>Agregar</button>
    </form>
  );
};

AddCategory.propTypes = {
  onAddCategories: PropTypes.func.isRequired,
};
