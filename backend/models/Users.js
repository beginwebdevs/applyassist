const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
    // user_id: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    user_name: {
        type: String,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
    },
    user_phone: {
        type: String,
        required: true,
    },
    user_password: {
        type: String,
        required: true,
    },
    is_active: {
        type: Boolean,
        required: true,
        default: 1
    },
    

});

const Users = mongoose.model('users', usersSchema);
module.exports = Users;