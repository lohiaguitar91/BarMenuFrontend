import RecipeCard from '../../components/RecipeCard';
import Link from 'next/link';

const sampleData = [
  {
    id: 1,
    name: "Jollof Rice",
    picture: "/images/food-1.jpeg",
    ingredients: "Beef, Tomato, Spinach",
    difficulty: "easy",
    prep_time: 15,
    prep_guide:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, porro. Dignissimos ducimus ratione totam fugit officiis blanditiis exercitationem, nisi vero architecto quibusdam impedit, earum "
  },
  {
    id: 2,
    name: "Macaroni",
    picture: "/images/food-2.jpeg",
    ingredients: "Beef, Tomato, Spinach",
    difficulty: "easy",
    prep_time: 15,
    prep_guide:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, porro. Dignissimos ducimus ratione totam fugit officiis blanditiis exercitationem, nisi vero architecto quibusdam impedit, earum "
  },
  {
    id: 3,
    name: "Fried Rice",
    picture: "/images/banner.jpg",
    ingredients: "Beef, Tomato, Spinach",
    difficulty: "easy",
    prep_time: 15,
    prep_guide:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, porro. Dignissimos ducimus ratione totam fugit officiis blanditiis exercitationem, nisi vero architecto quibusdam impedit, earum "
  }
];

const Recipes = ({ recipes }) => {
  const deleteRecipe = (recipe_id) => {
    console.log(`Deleted ${recipe_id}`);
  };

  return (
    <main className="container mt-5">
      <div className="row">
        <div className="col-12 text-right mb-4">
          <div className="d-flex justify-content-between">
            <h3>La Recipes</h3>
            <Link href="/recipes/add" className="btn btn-info">
              Add Recipe
            </Link>
          </div>
        </div>
        {recipes.map((recipe) => (
          <div key={recipe.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <RecipeCard recipe={recipe} onDelete={deleteRecipe} />
          </div>
        ))}
      </div>
    </main>
  );
};

export async function getStaticProps() {
  return {
    props: {
      recipes: sampleData,
    },
  };
}

export default Recipes;
