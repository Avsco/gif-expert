import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

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

      <ul>
        {categories.map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
