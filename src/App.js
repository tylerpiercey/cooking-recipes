import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import AddRecipe from './AddRecipe';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" exact component={RecipeList} />
                <Route path="/add-recipe" component={AddRecipe} />
            </Routes>
        </Router>
    );
}

export default App;

