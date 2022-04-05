const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const deliveryManSchema = mongoose.Schema({
    name: { type: String, required: true },
    firstname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
},
{
    collection: 'deliveryMan',
    versionKey: false
});

deliveryManSchema.plugin(uniqueValidator);

module.exports = mongoose.model('DeliveryMan', deliveryManSchema);