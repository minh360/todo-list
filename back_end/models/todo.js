const mongoose = require('mongoose')
const { Schema } = mongoose;
const todoSchema = new Schema({
    title: String,
    describe: String,
    time: Date,
    done: { type: Boolean, default: false},
    id_user: String
});
module.exports = mongoose.model('todos', todoSchema);