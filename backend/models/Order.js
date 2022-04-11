const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const orderSchema = mongoose.Schema({
    numOrder: { type: String, required: true, unique: true },
    dateOrder: { type: Date, required: true },
    client: { type: mongoose.Schema.Types.Mixed, required: true }
},
{
    collection: 'order',
    versionKey: false
});

orderSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Order', orderSchema);