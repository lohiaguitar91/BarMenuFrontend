import { useRouter } from 'next/router'; // Using instead of Link because problems that probably don't exist, could change back later...
import Link from 'next/link';
import { useEffect } from 'react';

const IndividualRecipeCard = ({ recipe }) => {
  const router = useRouter();

  useEffect(() => {
    const paragraphs = document.querySelectorAll('p');
    paragraphs.forEach((paragraph) => {
      paragraph.innerHTML = paragraph.innerHTML.replace(/,/g, ',<br/>');
    });
  }, []);

  return (
    <div className="card individual-recipe-card">
      <div className="card-body">
        <h1 className="card-title">{recipe.name}</h1>
        <p className="card-image">
          <img src={recipe.picture} width="200" height="200"></img>
        </p>
        <div className="steps-card">
          <p className="card-text">
            <strong>Ingredients:</strong>
            {recipe.ingredients}
          </p>
        </div>
       <div className="steps-card">
        <p className="steps">
            <strong>Steps:</strong>
            {recipe.steps}
          </p>
       </div>
        <div className="action-buttons">
        <button className="btn btn-sm btn-order">
          <Link
          href={{ 
            pathname: '/recipes/[id]',
            query: {id: recipe.id},
          }} 
        >Order!
        </Link>
        </button>
        </div>
      </div>
      <style jsx>{`
        .individual-recipe-card {
          box-shadow: 0 1rem 1.5rem rgba(0, 0, 0, 0.6);
        }
        .steps-card {
          display: inline-block;
          margin-right: 5px;
        }
        
      `}</style>
    </div>
  );
};

export default IndividualRecipeCard;
