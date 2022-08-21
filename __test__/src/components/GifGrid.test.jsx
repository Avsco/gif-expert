import { render } from '@testing-library/react';
import { GifGrid } from '../../../src/components/GifGrid';
import { useFetchGifs } from '../../../src/hooks/useFetchGifs';

jest.mock('../../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => {
  const category = 'One Punch';

  test('Debe de mostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({ gifs: [], isLoading: true });
    const { getByText } = render(<GifGrid category={category} />);

    expect(getByText('Loading...'));
    expect(getByText(category));
  });

  test('Debe de mostrar item cuando se cargan los gifs', () => {
    const gifs = [
      {
        id: 'ABC',
        url: 'https://localhost/one-punch.gif',
        title: 'One Punch',
      },
      {
        id: 'DEF',
        url: 'https://localhost/one-punch.gif',
        title: 'One Punch',
      },
    ];

    useFetchGifs.mockReturnValue({ gifs, isLoading: false });
    const { getAllByRole } = render(<GifGrid category={category} />);

    expect(getAllByRole('img').length).toBe(2);
  });
});
