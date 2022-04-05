const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const managerSchema = mongoose.Schema({
    name: { type: String, required: true },
    firstname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
},
{
    collection: 'manager',
    versionKey: false
});

managerSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Manager', managerSchema);