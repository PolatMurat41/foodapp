import { useEffect, useState } from "react";

export default function FoodDetail({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = "e53f1dbc4e64485ca11f9001bc5517ef";
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div>
        Food Details {foodId}
        {food.title}
        <img src={food.image} alt="" />
      </div>
      <span>
        <strong>⌚{food.readyInMinutes}</strong>
      </span>
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          food.analyzedInstruciins[0].steps.map((step) => <li>{step.step}</li>)
        )}
        <h2>Instructions</h2>
      </div>

      <span>{food.vegetarian ? "🥬Vetegarian" : "🥩Non-Vegetarian"}</span>
    </div>
  );
}
