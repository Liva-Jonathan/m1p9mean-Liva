const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    idRestaurant: { type: String, required: true }
},
{
    collection: 'food',
    versionKey: false
});

module.exports = mongoose.model('Food', foodSchema);