import React, {useState} from "react";
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

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
                            <Form.Label>Select Image</Form.Label>
                            <Form.Control
                                as="select"
                                value={newRecipe.image}
                                onChange={(e) => setNewRecipe({ ...newRecipe, image: e.target.value})}
                            >
                                <option value="tuna.jpeg"> Image 1 </option>
                                <option value="cheese.jpeg"> Image 2 </option>
                                <option value="tomato.jpeg"> Image 3 </option>
                                <option value="ham.jpeg"> Image 4 </option>
                            </Form.Control>
                        </Form.Group>
                        
                        <Button type="submit">Add Recipe</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default AddRecipe;
