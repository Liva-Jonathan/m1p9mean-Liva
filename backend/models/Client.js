const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const clientSchema = mongoose.Schema({
    name: { type: String, required: true },
    firstname: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
},
{
    collection: 'client',
    versionKey: false
});

clientSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Client', clientSchema);