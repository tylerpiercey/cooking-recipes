import React from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import RecipeList from './RecipeList';
import AddRecipe from './addRecipe';

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={RecipeList} />
                <Route path="/add-recipe" component={AddRecipe} />
            </Switch>
        </Router>
    );
}

export default App;