const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const restaurantSchema = mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
},
{
    collection: 'restaurant',
    versionKey: false
});

restaurantSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Restaurant', restaurantSchema);