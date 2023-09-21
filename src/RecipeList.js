import React, { useState, useEffect } from "react";
import recipesData from "./recipes.json";
import AddRecipe from "./AddRecipe";

function RecipeList() {
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
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    <p>{recipe.description}</p>
                    <button onClick={() => removeRecipe(recipe.id)}>Remove</button>
                </div>
            ))}
            <AddRecipe onAdd={addNewRecipe} />
        </div>
    );
}

export default RecipeList;
