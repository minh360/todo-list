const User = require('../models/user')

class UserRepository {
    constructor(model) {
        this.model = model;
    }
    create (object){
        if (!this.model.findOne({user_name: object.user_name})){
            const newUser = {
                user_name: object.user_name,
                password: object.password,
            };
            const user = new this.model(newUser);

            return user.save();
        }
    }
    signIn(object){
        this.model.findOne({
            user_name: object.user_name,
            password: object.password
        },function (err, user){
            return user
        })
    }
    updateById(id, object) {
        const query = { _id: id };
        return this.model.findOneAndUpdate(query, { $set: { name: object.name, email: object.email, password: object.password } });
    }
}
module.exports = new UserRepository(User)