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
            time: object.time,
            id_user: object.id_user
        };
        const todo = new this.model(newTodo);

        return todo.save();
    }
    findByIdUser(id){
        return this.model.find({id_user: id});
    }
    deleteById(id) {
        return this.model.findByIdAndDelete(id);
    }
    updateById(id, object) {
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $set: { title: object.title, describe: object.describe, done: object.done ,time: object.time} });
    }
}
module.exports = new TodoRepository(Todo)