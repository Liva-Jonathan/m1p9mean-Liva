const bcrypt = require('bcrypt');
const Client = require('../models/Client');

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 3)
        .then(hash => {
        const client = new Client({
            ...req.body,
            password: hash
        });
        client.save()
            .then(() => res.status(201).json({ message: 'Client created !' }))
            .catch(error => res.status(400).json({ error: error.message }));
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: error.message })
        });
};
