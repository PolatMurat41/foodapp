import { useState, useEffect } from "react";
import styles from "./search.module.css";
const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "35bde87d6301487497fb7ef9b3b34719";
export default function Search({ foodData, setFoodData }) {
  const [query, setQurey] = useState("pizza");
  // Syntax of the useEffect hook
  useEffect(() => {
    async function fetchFood() {
      const response = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await response.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input}
        value={query}
        onChange={(e) => setQurey(e.target.value)}
        type="text"
      />
    </div>
  );
}
