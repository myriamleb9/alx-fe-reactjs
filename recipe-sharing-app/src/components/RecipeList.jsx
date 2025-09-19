import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const listToShow = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Recipe List</h2>
      {listToShow.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        listToShow.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            <br />
            {favorites.includes(recipe.id) ? (
              <button onClick={() => removeFavorite(recipe.id)} style={{ marginTop: '5px' }}>
                ❌ Remove from Favorites
              </button>
            ) : (
              <button onClick={() => addFavorite(recipe.id)} style={{ marginTop: '5px' }}>
                ⭐ Add to Favorites
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
