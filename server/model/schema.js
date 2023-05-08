const mongoose = require('mongoose')
const auto = require('mongoose-auto-increment')
auto.initialize(mongoose.connection);
const schema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'must provide name'],
    },
    username: {
        type:String,
        required: [true, 'must provide username'],
    },
    email: {type: String, required: [true, 'must provide email'],},
    phone: {type: String, required: [true, 'must provide phone'],}
})

schema.plugin(auto.plugin, 'user')

module.exports = mongoose.model('user', schema)