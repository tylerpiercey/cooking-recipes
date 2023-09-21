import React, {useState} from "react";
import { Form, Button } from 'react-bootstrap';

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
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    type="text" 
                    placeholder="Name"
                    value={newRecipe.name}
                    onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value})}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control 
                    placeholder="Ingredients"
                    value={newRecipe.ingredients}
                    onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value})}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                    as="textarea" 
                    placeholder="Directions"
                    value={newRecipe.directions}
                    onChange={(e) => setNewRecipe({ ...newRecipe, directions: e.target.value})}
                />
            </Form.Group>

            <Form.Group>
                <Form.Control
                type="text"
                    placeholder="Description"
                    value={newRecipe.description}
                    onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })}
                />
            </Form.Group>
            
            <Form.Group>
                <Form.Control
                    as="select"
                    value={newRecipe.image}
                    onChange={(e) => setNewRecipe({ ...newRecipe, image: e.target.value})}
                >
                    <option value="tuna.jpeg">Image 1</option>
                    <option value="cheese.jpeg"> Image 2</option>
                    <option value="tomato.jpeg">Image 3</option>
                    <option value="ham.jpeg"> Image 4</option>
                </Form.Control>
            </Form.Group>
            
            <Button type="submit">Add Recipe</Button>
        </Form>
    );
}

export default AddRecipe;
