const express = require("express");
const router = express.Router()
const todo_repository = require('./repositories/todo_repository')
const user_repository = require('./repositories/user_respository')

router.get('/todo', (req, res) => {
    todo_repository.findAll().then((todos) => {
        res.json(todos);
    }).catch((error) => console.log(error));
});

router.post('/todo', (req, res) => {
    const { object } = req.body;
    todo_repository.create(object).then((todo) => {
        res.json(todo);
    }).catch((error) => console.log(error));
});

router.delete('/todo/:id', (req, res) => {
    const { id } = req.params;
    todo_repository.deleteById(id).then((ok) => {
        console.log(ok);
        console.log(`Deleted record with id: ${id}`);
        res.status(200).json([]);
    }).catch((error) => console.log(error));
});
router.put('/todo/:id', (req, res) => {
    const { id } = req.params;
    const todo = { title: req.body.title, describe: req.body.describe, done: req.body.done };
    todo_repository.updateById(id, todo)
        .then(res.status(200).json([]))
        .catch((error) => console.log(error));
});

router.post('/user/sign_up', (req, res) => {
    const newUser = req.body;
    user_repository.create(newUser)
        .then(res.status(200).json([]))
        .catch((error) => console.log(error));
});

router.post('/user/sign_in', (req, res) => {
    const user = req.body;
    user_repository.signIn(user).then((user) => {
        res.json(user);
    }).catch((error) => console.log(error));
});

router.put('/user/:id', (req, res) => {
    const { id } = req.params;
    const user = { name: req.body.name, password: req.body.password };
    user_repository.updateById(id, user)
        .then(res.status(200).json([]))
        .catch((error) => console.log(error));
});

module.exports = router