import { useRouter } from 'next/router'
import IndividualRecipeCard from "../../../components/IndividualRecipeCard";
import axios from "axios";

export default function Recipe({ recipe }) {
  const router = useRouter()

  return (
    <div>
      <div className="individual-recipe-card">
          <IndividualRecipeCard
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
      picture: data["data"]["picture"],
      steps: data["data"]["steps"],
    }
    return { props: { recipe }};
  } catch (e) {
    console.log("The error is: " + e)
    return { props: { recipe: [] } };
  }
}
