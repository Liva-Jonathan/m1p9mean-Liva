var express = require('express');

const authRoutes = require('./routes/Auth');

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

app.use('/api/auth', authRoutes);

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
