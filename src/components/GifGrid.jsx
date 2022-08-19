import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    getGifs(category).then((gifs) => {
      setGifs(gifs);
    });
  }, [category]);

  return (
    <div>
      <h3>{category}</h3>
      <div className='card-grid'>
        {gifs.map(({ id, url, title }) => (
          <GifItem key={id} id={id} url={url} title={title} />
        ))}
      </div>
    </div>
  );
};
