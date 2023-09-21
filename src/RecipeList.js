import React from "react";


function RecipeList({recipes, onRemove}) {
    return (
        <div>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    <img src={process.env.PUBLIC_URL + `./${recipe.image}`} alt={recipe.name} />
                    <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                    <p><strong>Directions:</strong> {recipe.directions}</p>
                    <p>{recipe.description}</p>
                    <button onClick={() => onRemove(recipe.id)}>Remove</button>
                </div>
            ))}
        </div>
    );
}

export default RecipeList;
