import React from "react";
import { Card, Button } from 'react-bootstrap';


function RecipeList({recipes, onRemove}) {
    return (
        <div>
            {recipes.map((recipe) => (
                <Card key={recipe.id} style={{ marginBottom: '20px' }}>
                    <Card.Img 
                        variant="top" 
                        src={process.env.PUBLIC_URL + `./${recipe.image}`}
                        alt={recipe.name}
                        style={{width: '200px', height: '150px'}} 
                    />
                    <Card.Body>
                        <Card.Title>{recipe.name}</Card.Title>
                        <Card.Text><strong>Ingredients:</strong> {recipe.ingredients}</Card.Text>
                        <Card.Text><strong>Directions:</strong> {recipe.directions}</Card.Text>
                        <Card.Text>{recipe.description}</Card.Text>
                        <Button variant="danger" onClick={() => onRemove(recipe.id)}>Remove</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}

export default RecipeList;
