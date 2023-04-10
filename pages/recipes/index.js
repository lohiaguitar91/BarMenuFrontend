import RecipeCard from "../../components/RecipeCard";
import { useRouter } from "next/router";
import axios from "axios";

export default function RecipesList({ recipes }) {
  const router = useRouter();

  return (
    <div>
      <h1>Recipes list</h1>
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>
      <p></p>
      <div className="custom-order-container">
        <button>Place Custom Order</button>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    console.log("THIS IS THE URL: " + `${process.env.API_URL}`);
    const { data } = await axios.get(`${process.env.API_URL}/recipes/`);
    const recipes = data.map((recipe) => ({
      id: recipe.id,
      name: recipe.name,
      ingredients: recipe.ingredients,
      picture: recipe.picture,
    }));
    console.log(recipes);
    return { props: { recipes }};
  } catch (e) {
    return { props: { recipes: [] } };
  }
}
