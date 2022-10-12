const mongoose = require('mongoose');

//Schema to define user collection
const UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

//Collection
const User = mongoose.model('users', UserSchema);

module.exports = User;