import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function App() {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const addCategories = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([...categories, newCategory]);
  };

  return (
    <div>
      <h1>GifExpertApp</h1>
      <AddCategory onAddCategories={addCategories} />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
}

export default App;
