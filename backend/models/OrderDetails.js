const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const orderDetailsSchema = mongoose.Schema({
    order: { type: mongoose.Schema.Types.Mixed, required: true },
    food: { type: mongoose.Schema.Types.Mixed, required: true },
    quantity: { type: Number, required: true },
    status: { type: String },
    deliveryMan: { type: mongoose.Schema.Types.Mixed }
},
{
    collection: 'orderDetails',
    versionKey: false
});

orderDetailsSchema.plugin(uniqueValidator);

module.exports = mongoose.model('OrderDetails', orderDetailsSchema);