import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from '.';

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFetchGifs({ category });

  return (
    <div>
      <h3>{category}</h3>
      {isLoading && <p>Loading...</p>}
      <div className='card-grid'>
        {gifs.map(({ id, url, title }) => (
          <GifItem key={id} id={id} url={url} title={title} />
        ))}
      </div>
    </div>
  );
};
