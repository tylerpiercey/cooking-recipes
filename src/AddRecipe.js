import React, {useState} from "react";

function AddRecipe({ onAdd }) {
    const [newRecipe, setNewRecipe] = useState({
        id: '',
        name: '',
        ingredients: '',
        directions: '',
        description: '',
        image: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newRecipe.name && newRecipe.ingredients && newRecipe.directions) {
            onAdd(newRecipe);
            setNewRecipe({
                id: '',
                name: '',
                ingredients: '',
                directions: '',
                description: '',
                image: ''
            });
        } else {
            alert("Please fill out all fields.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Name"
                value={newRecipe.name}
                onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value})}
            />
            <textarea 
                placeholder="Ingredients"
                value={newRecipe.ingredients}
                onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value })}
            ></textarea>
            <textarea 
                placeholder="Directions"
                value={newRecipe.directions}
                onChange={(e) => setNewRecipe({ ...newRecipe, directions: e.target.value})}
            ></textarea>
            <input 
                type="text" 
                placeholder="Description"
                value={newRecipe.description}
                onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value})}
            />
            <select
                value={newRecipe.image}
                onChange={(e) => setNewRecipe({ ...newRecipe, image: e.target.value})}
            >
                <option value="tuna.jpeg">Image 1</option>
                <option value="cheese.jpeg"> Image 2</option>
                <option value="tomato.jpeg">Image 3</option>
                <option value="ham.jpeg"> Image 4</option>
            </select>
            <button type="submit">Add Recipe</button>
        </form>
    );
}

export default AddRecipe;
