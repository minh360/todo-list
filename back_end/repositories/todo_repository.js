const Todo = require('../models/Todo');

class TodoRepository {
    constructor(model) {
        this.model = model;
    }
    create (object){
        const newTodo = {
            title: object.title,
            describe: object.describe,
            done: false,
            time: Date.now()
        };
        const todo = new this.model(newTodo);

        return todo.save();
    }
    findAll(){
        return this.model.find();
    }
    findById(id){
        return this.model.findById(id);
    }
    deleteById(id) {
        return this.model.findByIdAndDelete(id);
    }
    updateById(id, object) {
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $set: { title: object.title, describe: object.describe, done: object.done } });
    }
}
module.exports = new TodoRepository(Todo)