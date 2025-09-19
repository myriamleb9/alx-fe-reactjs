import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');
  };

  return (
    <button
      onClick={handleDelete}
      style={{ marginTop: '10px', background: 'red', color: 'white', padding: '8px' }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
