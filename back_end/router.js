const express = require("express");
const router = express.Router()
const todo_repository = require('./repositories/todo_repository')
const user_repository = require('./repositories/user_respository')

router.get('/todo/:id', (req, res) => {
    const { id } = req.params;
    todo_repository.findByIdUser(id).then((todos) => {
        res.json(todos);
    }).catch((error) => console.log(error));
});

router.post('/todo', (req, res) => {
    const object = req.body;
    todo_repository.create(object)
        .then(res.status(200).json([]))
        .catch((error) => console.log(error));
});

router.delete('/todo/:id', (req, res) => {
    const { id } = req.params;
    todo_repository.deleteById(id).then(()=>
        res.status(200).json([])
    ).catch((error) => console.log(error));
});
router.put('/todo/:id', (req, res) => {
    const { id } = req.params;
    const todo = { title: req.body.title, describe: req.body.describe, done: req.body.done ,time: req.body.time};
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

router.post('/user/sign_up/check', (req, res) => {
    const obj = req.body;
    user_repository.checkExist(obj)
        .then(user_exist => {
            res.status(200).json(user_exist)
        })
        .catch((error) => console.log(error));
});

router.post('/user/sign_in', (req, res) => {
    const obj = req.body;
    user_repository.signIn(obj).then((user) => {
        res.status(200).json(user);
    }).catch((error) => console.log(error));
});

module.exports = router