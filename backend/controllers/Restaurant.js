const Restaurant = require('../models/Restaurant');
const bcrypt = require('bcrypt');

exports.getAll = (req, res, next) => {
    Restaurant.find()
    .then(restaurants => res.status(200).json(restaurants))
    .catch(error => res.status(400).json({ error: error.message }));
};

exports.getOne = (req, res, next) => {
    Restaurant.findOne({ _id: req.params.id })
      .then(restaurant => res.status(200).json(restaurant))
      .catch(error => res.status(404).json({ error: error.message }));
};

exports.create = (req, res, next) => {
    bcrypt.hash(req.body.password, 3)
    .then(hash => {
        const restaurant = new Restaurant({ ...req.body, password: hash });
        restaurant.save()
        .then(() => res.status(201).json({ message: 'Restaurant created !'}))
        .catch(error => res.status(400).json({ error: error.message }));
    })
    .catch(error => res.status(500).json({ error: error.message }));
};

exports.modify = (req, res, next) => {
    Restaurant.updateOne({ _id: req.params.id }, { ...req.body, })
        .then(() => res.status(200).json({ message: 'Restaurant updated !'}))
        .catch(error => res.status(400).json({ error: error.message }));
};

exports.delete = (req, res, next) => {
    Restaurant.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Restaurant deleted !'}))
      .catch(error => res.status(400).json({ error: error.message }));
};