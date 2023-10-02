const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('build'));
mongoose.connect('mongodb://localhost:27017/cookingRecipes', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Could not connect to MongoDB', error));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server runniung on port ${PORT}`);
});