import { useRouter } from 'next/router'; // Using instead of Link because problems that probably don't exist, could change back later...

const RecipeCard = ({ recipe, onViewClick }) => {
  console.log("THIS IS THE RECIPE" + recipe)
  const router = useRouter();

  const handleViewClick = () => {
    router.push(`/recipes/${recipe.id}`);
    if (onViewClick) {
      onViewClick();
    }
  };

  return (
    <div className="card recipe-card">
      <div className="card-body">
        <h5 className="card-title">{recipe.name}</h5>
        <p className="card-text">
          <strong>Ingredients:</strong> {recipe.ingredients}
        </p>
        <div className="action-buttons">
          <button onClick={handleViewClick} className="btn btn-sm btn-success">
            View
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
