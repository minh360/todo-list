const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
mongoose.connect('mongodb://localhost:27017/todo-data')
const db = mongoose.connection;
const router = require('./router')

db.once('open', function(){
    console.log("Connected to MongoDB successfully!");
});

app.use('/', router);

app.listen(port)

