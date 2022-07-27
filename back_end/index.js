const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = require('express')()
const port = 3000
mongoose.connect('mongodb://localhost:27017/todo-data')
const db = mongoose.connection;
const router = require('./router')

db.once('open', function(){
    console.log("Connected to MongoDB successfully!");
});
const jsonParser = bodyParser.json();

app.use(jsonParser);
app.use(cors())
app.use('/', router);

app.listen(port)

