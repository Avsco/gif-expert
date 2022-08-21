import { fireEvent, render } from '@testing-library/react';
import { AddCategory } from '../../../src/components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
  test('Debe de cambiar el valor del input', () => {
    const inputValue = 'Saitama';
    const { getByRole } = render(<AddCategory onAddCategories={() => {}} />);
    const input = getByRole('textbox');

    fireEvent.input(input, { target: { value: inputValue } });

    expect(input.value).toBe('Saitama');
  });

  test('Debe de llamar onAddCategories si el input tiene mas de 2 caracteres', () => {
    const inputValue = 'Saitama';
    const handleAddCategories = jest.fn();

    const { getByRole } = render(<AddCategory onAddCategories={handleAddCategories} />);
    const input = getByRole('textbox');
    const form = getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(handleAddCategories).toHaveBeenCalled();
    expect(handleAddCategories).toHaveBeenCalledTimes(1);
    expect(handleAddCategories).toHaveBeenCalledWith(inputValue);
  });

  test('No Debe de llamar onAddCategories si el input tiene menos de 3 caracteres', () => {
    const inputValue = 'Sa';
    const handleAddCategories = jest.fn();

    const { getByRole } = render(<AddCategory onAddCategories={handleAddCategories} />);
    const input = getByRole('textbox');
    const form = getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);

    expect(input.value).toBe(inputValue);
    expect(handleAddCategories).toHaveBeenCalledTimes(0);
  });
});
