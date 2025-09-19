import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const recipes = useRecipeStore((state) => state.recipes);

  const listToShow = filteredRecipes.length > 0 ? filteredRecipes : recipes;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Recipe List</h2>
      {listToShow.length === 0 ? (
        <p>No recipes found. Try adding some or adjusting your search.</p>
      ) : (
        listToShow.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ccc',
              margin: '10px 0',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
