const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const Client = require('../models/Client');
const Restaurant = require('../models/Restaurant');
const DeliveryMan = require('../models/DeliveryMan');
const Manager = require('../models/Manager');

exports.getUser = (req, res, next) => {
    const userType = req.query.type;
    const userId = req.params.userId;

    const UserModel = mongoose.model(userType);
    UserModel.findById(userId).lean()
        .then(user => {
            if(!user) return res.status(401).json({ error: 'Unexisting User !' });

            user.userType = userType;
            res.status(200).json({ user: user });
        })
        .catch(error => { 
            console.log(error);
            res.status(500).json({ error: error.message })
        });
};

exports.findUser = (User, req, res, next) => {
    if(req.user) return next();

    User.findOne({ email: req.body.email }).lean()
      .then(user => {
        if (user) {
          // return res.status(401).json({ error: 'Unexisting Client !' });
          req.user = { ...user, userType: User.modelName }
        }
        next();
      })
      .catch(error => { 
        console.log(error);
        res.status(500).json({ error: error.message })
      });
};

exports.findClient = (req, res, next) => {
    this.findUser(Client, req, res, next);
};

exports.findRestaurant = (req, res, next) => {
    this.findUser(Restaurant, req, res, next);
};

exports.findDeliveryMan = (req, res, next) => {
    this.findUser(DeliveryMan, req, res, next);
};

exports.findManager = (req, res, next) => {
    this.findUser(Manager, req, res, next);
};

exports.checkUser = (req, res, next) => {
    if(!req.user){
        return res.status(401).json({ error: 'Unexisting User !' });
    }

    bcrypt.compare(req.body.password, req.user.password)
        .then(valid => {
            if (!valid) {
                return res.status(401).json({ error: 'Password incorrect !' });
            }
            res.status(200).json({
                user: req.user,
                token: jwt.sign({ userId: req.user._id, userType: req.user.userType }, 'RANDOM_TOKEN_SECRET', { expiresIn: '24h' })
            });
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: error.message })
        });
};