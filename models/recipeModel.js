const mongoose = require('mongoose');
const recipeSchema = new mongoose.Schema({
    name: String,
    ingedrients: [String],
    directions: String,
    description: String,
    image: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;