import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ({ category }) => {
  const [data, setData] = useState({
    gifs: [],
    isLoading: true,
  });

  const getImages = async (category) => {
    const gifs = await getGifs(category);
    setData({ gifs, isLoading: false });
  };

  useEffect(() => {
    getImages(category);
  });

  return {
    gifs: data.gifs,
    isLoading: data.isLoading,
  };
};
