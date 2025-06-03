const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CRUD');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    
});
const User = mongoose.model('User', userSchema);
module.exports = User;