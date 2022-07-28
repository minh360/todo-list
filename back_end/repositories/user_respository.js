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
    checkExist(object){
        return this.model.findOne({email: object.email})
    }
    signIn(object){
        return this.model.findOne({
            email: object.email,
            password: object.password
        })
    }
}
module.exports = new UserRepository(User)