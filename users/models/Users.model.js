const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    name:{
        type: String,
    },
    userId:{
        type: String,
        required: true,
        unique: true,
    },
    email:{
        type: String
    },
    phoneNumber:{
        type: Number
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

module.exports = UsersModel = mongoose.model('users', UsersSchema);