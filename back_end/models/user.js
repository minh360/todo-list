const mongoose = require('mongoose')
const { Schema } = mongoose;
const userSchema = new Schema({
    user_name: String,
    name: String,
    email: String,
    password: String,
    recent_times: { type: Date, default: Date.now() },
});
module.exports = mongoose.model('users', userSchema);