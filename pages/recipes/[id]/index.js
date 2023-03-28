import { useRouter } from 'next/router'
import RecipeCard from "../../../components/RecipeCard";
import axios from "axios";

export default function Recipe({ recipe }) {
  const router = useRouter()

  return (
    <div>
      <h1>Recipe</h1>
      <div className="recipe-card">
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
      </div>
    </div>
  );
}

export async function getServerSideProps(id) {
  try {
    const queryVar = id["query"]["id"]
    const url = `${process.env.API_URL}/recipes/${queryVar}`
    const data = await axios.get(url);
    const recipe = {
      id: data["data"]["id"],
      name: data["data"]["name"],
      ingredients: data["data"]["ingredients"],
    }
    return { props: { recipe }};
  } catch (e) {
    console.log("The error is: " + e)
    return { props: { recipe: [] } };
  }
}
