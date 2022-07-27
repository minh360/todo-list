const mongoose = require('mongoose')
const { Schema } = mongoose;
const todoSchema = new Schema({
    title: String,
    describe: String,
    time: { type: Date, default: Date.now() },
    done: { type: Boolean, default: false}
});
module.exports = mongoose.model('todos', todoSchema);