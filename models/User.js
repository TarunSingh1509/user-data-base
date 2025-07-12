const mongoose = require('mongoose');
require('dotenv').config();
// console.log("this is env",process.env)
mongoose.connect(process.env.MONGODB_URI);

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    
});
const User = mongoose.model('User', userSchema);
module.exports = User;