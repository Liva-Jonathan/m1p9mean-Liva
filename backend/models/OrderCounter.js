const mongoose = require('mongoose');

const orderCounterSchema = mongoose.Schema({
    _id: { type: String, required: true },
    sequence: { type: Number, required: true }
},
{
    collection: 'orderCounter',
    versionKey: false
});

module.exports = mongoose.model('OrderCounter', orderCounterSchema);