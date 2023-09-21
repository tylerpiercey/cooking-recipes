import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import recipesData from './recipes.json';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';

function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  const addNewRecipe = (recipe) => {
    recipe.id = recipes.length + 1;
    setRecipes([...recipes, recipe]);
  };

  const removeRecipe = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<RecipeList recipes={recipes} onRemove={removeRecipe} />} />
                <Route path="/add-recipe" element={<AddRecipe onAdd={addNewRecipe} />} />
            </Routes>
        </Router>
    );
}

export default App;

