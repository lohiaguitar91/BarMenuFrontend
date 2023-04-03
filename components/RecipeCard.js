import { useRouter } from 'next/router'; // Using instead of Link because problems that probably don't exist, could change back later...
import Link from 'next/link'

const RecipeCard = ({ recipe }) => {
  const router = useRouter();
  return (
    <div className="card recipe-card">
      <div className="card-body">
        <h3 className="card-title">{recipe.name}</h3>
        <p className="card-image">
          <img src={recipe.picture} width="200" height="200"></img>
        </p>
        <div className="action-buttons">
        <button className="btn btn-sm btn-success">
          <Link
          href={{ 
            pathname: '/recipes/[id]',
            query: {id: recipe.id},
          }} 
        >View
        </Link>
        </button>
        </div>
      </div>
      <style jsx>{`
        .recipe-card {
          box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.6);
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default RecipeCard;
