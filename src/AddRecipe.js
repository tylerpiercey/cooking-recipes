import React, {useState} from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function AddRecipe({ onAdd }) {
    const [newRecipe, setNewRecipe] = useState({
        id: '',
        name: '',
        ingredients: '',
        directions: '',
        description: '',
        image: null
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newRecipe.name && newRecipe.ingredients && newRecipe.directions && newRecipe.image) {
            const formData = new FormData();
            formData.append('name', newRecipe.name);
            formData.append('ingredients', newRecipe.ingredients);
            formData.append('directions', newRecipe.directions);
            formData.append('description', newRecipe.description);
            formData.append('image', newRecipe.image); 

            try {
                await axios.post('/api/recipes', formData, {
                    headers: {
                        'Content-Type' : 'multipart/form-data'
                    }
                });
                onAdd(newRecipe);
                setNewRecipe({
                    id: '',
                    name: '',
                    ingredients: '',
                    directions: '',
                    description: '',
                    image: null
                });
            }  catch (error) {
                console.error("Error adding recipe:", error);
                alert("Failed to add recipe.");
            }
        }else {
            alert("Please fill out all fields.");
        }
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <h2>Add A New Recipe</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Recipe Name</Form.Label>
                            <Form.Control
                                type="text" 
                                placeholder="Name"
                                value={newRecipe.name}
                                onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value})}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Ingredients</Form.Label>
                            <Form.Control 
                                placeholder="Ingredients"
                                value={newRecipe.ingredients}
                                onChange={(e) => setNewRecipe({ ...newRecipe, ingredients: e.target.value})}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Directions</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3} 
                                placeholder="Directions"
                                value={newRecipe.directions}
                                onChange={(e) => setNewRecipe({ ...newRecipe, directions: e.target.value})}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                            type="text"
                                placeholder="Description"
                                value={newRecipe.description}
                                onChange={(e) => setNewRecipe({ ...newRecipe, description: e.target.value })}
                            />
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.Label>Upload Image</Form.Label>
                            <Form.Control
                                type="file"
                                onChange={(e) => setNewRecipe({ ...newRecipe, image: e.target.files[0] })}
                            />
                        </Form.Group>
                        
                        <Button type="submit">Add Recipe</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddRecipe;

