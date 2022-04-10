var express = require('express');

const path = require('path');

const authRoutes = require('./routes/Auth');
const foodRoutes = require('./routes/Food');
const orderRoutes = require('./routes/Order');
const restaurantRoutes = require('./routes/Restaurant');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-kaly', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


var app = express();

/* For CORS errors */
app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
    });

app.use(express.json());

app.use('/api/images', express.static(path.join(__dirname, 'assets/images')));

app.use('/api/auth', authRoutes);
app.use('/api/Food', foodRoutes);
app.use('/api/Order', orderRoutes);
app.use('/api/Restaurant', restaurantRoutes);

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
