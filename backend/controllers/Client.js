const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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

exports.login = (req, res, next) => {
    Client.findOne({ email: req.body.email })
      .then(client => {
        if (!client) {
          return res.status(401).json({ error: 'Unexisting Client !' });
        }
        bcrypt.compare(req.body.password, client.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Password incorrect !' });
            }
            res.status(200).json({
              clientId: client._id,
              token: jwt.sign({ clientId: client._id }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' })
            });
          })
          .catch(error => res.status(500).json({ error: error.message }));
      })
      .catch(error => res.status(500).json({ error: error.message }));
};