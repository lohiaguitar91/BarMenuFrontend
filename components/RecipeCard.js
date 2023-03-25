import { useRouter } from 'next/router';

const RecipeCard = ({ recipe, onDelete }) => {
  const router = useRouter();

  const handleViewClick = () => {
    router.push(`/recipes/${recipe.id}`);
  };

  return (
    <div className="card recipe-card">
      <img src={recipe.picture} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        <p className="card-text">
          <strong>Ingredients:</strong> {recipe.ingredients}
        </p>
        <div className="action-buttons">
          <button onClick={handleViewClick} className="btn btn-sm btn-success">
            View
          </button>
          <button onClick={() => onDelete(recipe.id)} className="btn btn-sm btn-danger">
            Delete
          </button>
        </div>
      </div>
      <style jsx>{`
        .recipe-card {
          box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.6);
        }
      `}</style>
    </div>
  );
};

export default RecipeCard;
