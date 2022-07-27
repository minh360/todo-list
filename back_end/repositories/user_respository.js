const User = require('../models/user')

class UserRepository {
    constructor(model) {
        this.model = model;
    }
    create(object){
        const newUser = {
            email: object.email,
            password: object.password,
        };
        const user = new this.model(newUser);

        return user.save();
    }
    signIn(object){
        return this.model.findOne({
            email: object.email,
            password: object.password
        })
    }
    updateById(id, object) {
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $set: { name: object.name, password: object.password } });
    }
}
module.exports = new UserRepository(User)