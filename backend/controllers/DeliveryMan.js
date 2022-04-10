const DeliveryMan = require('../models/DeliveryMan');
const bcrypt = require('bcrypt');

exports.getAll = (req, res, next) => {
    DeliveryMan.find()
    .then(deliveryMen => res.status(200).json(deliveryMen))
    .catch(error => res.status(400).json({ error: error.message }));
};

exports.getOne = (req, res, next) => {
    DeliveryMan.findOne({ _id: req.params.id })
      .then(deliveryMan => res.status(200).json(deliveryMan))
      .catch(error => res.status(404).json({ error: error.message }));
};

exports.create = (req, res, next) => {
    bcrypt.hash(req.body.password, 3)
    .then(hash => {
        const deliveryMan = new DeliveryMan({ ...req.body, password: hash });
        deliveryMan.save()
        .then(() => res.status(201).json({ message: 'Delivery man created !'}))
        .catch(error => res.status(400).json({ error: error.message }));
    })
    .catch(error => res.status(500).json({ error: error.message }));
};

exports.modify = (req, res, next) => {
    delete req.body.password;
    DeliveryMan.updateOne({ _id: req.params.id }, { ...req.body, })
        .then(() => res.status(200).json({ message: 'Delivery man updated !'}))
        .catch(error => res.status(400).json({ error: error.message }));
};

exports.delete = (req, res, next) => {
    DeliveryMan.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Delivery man deleted !'}))
      .catch(error => res.status(400).json({ error: error.message }));
};