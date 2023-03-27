import RecipeCard from "../../components/RecipeCard";
import { useRouter } from "next/router";
import axios from "axios";

export default function RecipesList({ recipes }) {
  const router = useRouter();
  console.log("DEBUG DEBUG DEBUG - Router called in pages/recipes/index");
  console.log("DEBUG DEBUG DEBUG - here are the recipes: " + recipes);

  return (
    <div>
      <h1>Recipes list</h1>
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
            //name={recipe.name} -> this screwed things up
            //ingredients={recipe.ingredients} -> this screwed things up
          />
        ))}
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
    }));
    console.log(recipes);
    return { props: { recipes }};
  } catch (e) {
    return { props: { recipes: [] } };
  }
}
