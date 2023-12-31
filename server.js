require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');
const Recipe = require('./models/recipeModel');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('build'));
app.use('/uploads', express.static('uploads'));
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/cooking-recipes';
mongoose.connect(MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Could not connect to MongoDB', error));

const API_WEB_KEY = process.env.API_WEB_KEY || "default_key";
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ 
    storage: storage,
    fileFilter: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        }
        cb("Error: File upload only supports the following filetypes- " + filetypes);
    } 
});

app.post('/api/recipes', upload.single('image'), async (req, res) => {
    const newRecipe = new Recipe({
        name:req.body.name,
        ingredients: req.body.ingredients,
        directions: req.body.directions,
        description: req.body.description,
        image: req.file.path
    });

    try {
        const savedRecipe = await newRecipe.save();
        res.status(200).send(savedRecipe);
    } catch (err) {
        return res.status(500).send(err);
    }
});

app.post('/api/uploadRecipes', (req, res) => {
    if (req.headers['api-web-key'] !== API_WEB_KEY) {
        return res.status(401).send('Unauthorized');
    }
    const recipes =  req.body.recipes;
    Recipe.insertMany(recipes, (err, savedRecipes) => {
        if(err) return res.status(500).send(err);
        res.status(200).send(savedRecipes);
    });
});

app.get('/api/recipes', (req, res) => {
    Recipe.find({}, (err, recipes) => {
        if(err) return res.status(500).send(err);
        res.status(200).send(recipes);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server runniung on port ${PORT}`);
});
