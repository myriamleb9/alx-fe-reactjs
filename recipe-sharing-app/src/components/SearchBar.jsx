import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <div style={{ margin: '20px' }}>
      <input
        type="text"
        placeholder="🔍 Search recipes..."
        onChange={(event) => setSearchTerm(event.target.value)}
        style={{ padding: '10px', width: '60%', fontSize: '1rem' }}
      />
    </div>
  );
};

export default SearchBar;
