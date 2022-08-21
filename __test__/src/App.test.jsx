import { render } from '@testing-library/react';
import App from '../../src/App';

describe('Prueba en <App/>', () => {
  test('Debe en onAddCategories agregar un nuevo elemento', () => {
    const {} = render(<App />);
  });

  test('No debe en onAddCategories agregar un elemento repetido', () => {
    const {} = render(<App />);
  });
});
