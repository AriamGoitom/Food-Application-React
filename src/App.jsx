import { useState, useEffect } from 'react';
import './App.css';
import SerachBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';

const apiUrl = "www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  // function to search for the recipes

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
      searchRecipes();
  }, []);

  return (
    <>
      <div className="container">
        <h2>Our Recipe App</h2>
      </div>
      
    </>
  );
}

export default App;
