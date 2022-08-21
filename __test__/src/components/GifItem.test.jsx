import { render } from '@testing-library/react';
import { GifItem } from '../../../src/components';

describe('Test in <GifItem/>', () => {
  const id = '1';
  const url = 'https://media1.giphy.com/media/xTcnKDqEQqQqQ/200.gif';
  const title = 'Test title';

  test('Evaluar snapshot', () => {
    const { asFragment } = render(<GifItem id={id} url={url} title={title} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('Mostrar la imagen con el URL indicado y el alt indicado', () => {
    const { container } = render(<GifItem id={id} url={url} title={title} />);

    expect(container.querySelector('img').getAttribute('src')).toBe(url);
    expect(container.querySelector('img').getAttribute('alt')).toBe(title);
  });

  test('Debe de mostrar el titulo del componente', () => {
    const { getByText } = render(<GifItem id={id} url={url} title={title} />);

    expect(getByText(title)).toBeTruthy();
  });
});
