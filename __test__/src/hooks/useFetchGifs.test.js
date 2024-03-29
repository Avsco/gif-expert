import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../../src/hooks/useFetchGifs';

describe('Pruebas en el hooks useFetchGifs', () => {
  const category = 'One Punch';

  test('debe de regresar el estado inicial', () => {
    const { result } = renderHook(() => useFetchGifs({ category }));
    const { gifs, isLoading } = result.current;

    expect(gifs.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test('debe de retornar un arreglo de imágenes y isLoading en false', async () => {
    const { result } = renderHook(() => useFetchGifs({ category }));

    await waitFor(() => {
      const { gifs, isLoading } = result.current;

      expect(gifs.length).toBeGreaterThan(0);
      expect(isLoading).toBeFalsy();
    });
  });
});
